import type { CSSObject, Rule, RuleContext } from '@unocss/core'
import type { Theme } from '../theme'
import { colorVariable, getStringComponent, globalKeywords, h, isCSSMathFn, parseCssColor } from '../utils'
import { passThemeKey } from '../utils/constant'
import { bracketTypeRe } from '../utils/handlers/regex'

export const fonts: Rule<Theme>[] = [
  // text
  [/^text-(.+)$/, handleSize, { autocomplete: 'text-$fontSize' }],

  // // text size
  [/^(?:text|font)-size-(.+)$/, handleSize, { autocomplete: 'text-size-$fontSize' }],

  // text colors
  [/^text-(?:color-)?(.+)$/, handlerColorOrSize, { autocomplete: 'text-$colors' }],

  // colors
  [/^(?:color|c)-(.+)$/, createDynamicColorMatcher('color', 'text')],

  // style
  [/^(?:text|color|c)-(.+)$/, ([, v]) => globalKeywords.includes(v) ? { color: v } : undefined, { autocomplete: `(text|color|c)-(${globalKeywords.join('|')})` }],

  // opacity
  [/^(?:text|color|c)-op(?:acity)?-?(.+)$/, ([, opacity]) => ({ '--un-text-opacity': h.bracket.percent.cssvar(opacity) }), { autocomplete: '(text|color|c)-(op|opacity)-<percent>' }],

  // weights
  [
    /^(?:font|fw)-?([^-]+)$/,
    ([, s], { theme }) => {
      const v = theme.fontWeight?.[s] ? `var(--font-weight-${s})` : h.bracket.global.number(s)
      return {
        '--un-font-weight': v,
        'font-weight': v,
      }
    },
    {
      autocomplete: [
        '(font|fw)-(100|200|300|400|500|600|700|800|900)',
        '(font|fw)-$fontWeight',
      ],
    },
  ],

  // leadings
  [
    /^(?:font-)?(?:leading|lh|line-height)-(.+)$/,
    ([, s], { theme }) => {
      const v = theme.leading?.[s] ? `var(--leading-${s})` : h.bracket.cssvar.global.rem(s)
      return {
        '--un-font-weight': v,
        'line-height': v,
      }
    },
    { autocomplete: '(leading|lh|line-height)-$lineHeight' },
  ],

  // synthesis
  ['font-synthesis-weight', { 'font-synthesis': 'weight' }],
  ['font-synthesis-style', { 'font-synthesis': 'style' }],
  ['font-synthesis-small-caps', { 'font-synthesis': 'small-caps' }],
  ['font-synthesis-none', { 'font-synthesis': 'none' }],
  [/^font-synthesis-(.+)$/, ([, s]) => ({ 'font-synthesis': h.bracket.cssvar.global(s) })],

  // tracking
  [
    /^(?:font-)?tracking-(.+)$/,
    ([, s], { theme }) => {
      const v = theme.tracking?.[s] ? `var(--tracking-${s})` : h.bracket.cssvar.global.rem(s)
      return {
        '--un-tracking': v,
        'letter-spacing': v,
      }
    },
    { autocomplete: 'tracking-$letterSpacing' },
  ],

  // word-spacing
  [
    /^(?:font-)?word-spacing-(.+)$/,
    ([, s], { theme }) => {
      // Use the same variable as tracking
      const v = theme.tracking?.[s] ? `var(--word-spacing-${s})` : h.bracket.cssvar.global.rem(s)
      return {
        '--un-word-spacing': v,
        'word-spacing': v,
      }
    },
    { autocomplete: 'word-spacing-$wordSpacing' },
  ],

  // stretch
  ['font-stretch-normal', { 'font-stretch': 'normal' }],
  ['font-stretch-ultra-condensed', { 'font-stretch': 'ultra-condensed' }],
  ['font-stretch-extra-condensed', { 'font-stretch': 'extra-condensed' }],
  ['font-stretch-condensed', { 'font-stretch': 'condensed' }],
  ['font-stretch-semi-condensed', { 'font-stretch': 'semi-condensed' }],
  ['font-stretch-semi-expanded', { 'font-stretch': 'semi-expanded' }],
  ['font-stretch-expanded', { 'font-stretch': 'expanded' }],
  ['font-stretch-extra-expanded', { 'font-stretch': 'extra-expanded' }],
  ['font-stretch-ultra-expanded', { 'font-stretch': 'ultra-expanded' }],
  [
    /^font-stretch-(.+)$/,
    ([, s]) => ({ 'font-stretch': h.bracket.cssvar.fraction.global(s) }),
    { autocomplete: 'font-stretch-<percentage>' },
  ],

  // family
  [
    /^font-(.+)$/,
    ([, d], { theme }) => {
      const v = theme.font?.[d] ? `var(--font-${d})` : h.bracket.cssvar.global(d)
      return {
        'font-family': v,
      }
    },
    { autocomplete: 'font-$fontFamily' },
  ],
]

export const tabSizes: Rule<Theme>[] = [
  [/^tab(?:-(.+))?$/, ([, s]) => {
    const v = h.bracket.cssvar.global.number(s || '4')
    if (v != null) {
      return {
        '-moz-tab-size': v,
        '-o-tab-size': v,
        'tab-size': v,
      }
    }
  }],
]

export const textIndents: Rule<Theme>[] = [
  [/^indent(?:-(.+))?$/, ([, s]) => {
    const v = h.bracket.number(s)
    if (v != null) {
      return { 'text-indent': `calc(var(--spacing) * ${v})` }
    }
  }, { autocomplete: 'indent-$textIndent' }],
]

export const textStrokes: Rule<Theme>[] = [
  // widths
  [/^text-stroke(?:-(.+))?$/, ([, s = 'DEFAULT'], { theme }) => {
    return {
      '-webkit-text-stroke-width': theme.textStrokeWidth?.[s]
        ? passThemeKey.includes(s) ? theme.textStrokeWidth?.[s] : `var(--text-stroke-width-${s})`
        : h.bracket.cssvar.px(s),
    }
  }, { autocomplete: 'text-stroke-$textStrokeWidth' }],

  // colors
  [/^text-stroke-(.+)$/, createDynamicColorMatcher('-webkit-text-stroke-color', 'text-stroke'), { autocomplete: 'text-stroke-$colors' }],
  [/^text-stroke-op(?:acity)?-?(.+)$/, ([, opacity]) => ({ '--un-text-stroke-opacity': h.bracket.percent.cssvar(opacity) }), { autocomplete: 'text-stroke-(op|opacity)-<percent>' }],
]

export const textShadows: Rule<Theme>[] = [
  [/^text-shadow(?:-(.+))?$/, ([, s = 'DEFAULT'], { theme }) => {
    const v = theme.textShadow?.[s]
    if (v != null) {
      return {
        '--un-text-shadow': colorVariable(v, 'un-text-shadow-color'),
        'text-shadow': 'var(--un-text-shadow)',
      }
    }
    return { 'text-shadow': h.bracket.cssvar.global(s) }
  }, { autocomplete: 'text-shadow-$textShadow' }],

  // colors
  [/^text-shadow-color-(.+)$/, createDynamicColorMatcher('--un-text-shadow-color', 'text-shadow'), { autocomplete: 'text-shadow-color-$colors' }],
  [/^text-shadow-color-op(?:acity)?-?(.+)$/, ([, opacity]) => ({ '--un-text-shadow-opacity': h.bracket.percent.cssvar(opacity) }), { autocomplete: 'text-shadow-color-(op|opacity)-<percent>' }],
]

function createDynamicColorMatcher(property: string, varName: string) {
  return ([, body]: string[], { theme, generator }: RuleContext<Theme>): CSSObject | undefined => {
    const data = parseColor(body, theme)
    if (!data)
      return

    const { color, key, opacity } = data
    const rawColorComment = generator.config.envMode === 'dev' && color ? ` /* ${color} */` : ''
    const css: CSSObject = {}

    if (color) {
      css[`--un-${varName}-opacity`] = `${opacity || 100}%`
      const value = key ? `var(--color-${key})` : color
      css[property] = `color-mix(in oklch, ${value} var(--un-${varName}-opacity), transparent)${rawColorComment}`
    }

    return css
  }
}

function handleSize([, s]: string[], { theme }: RuleContext<Theme>): CSSObject | undefined {
  if (theme.text?.[s] != null) {
    return {
      'font-size': `var(--text-${s}-font-size)`,
      'line-height': `var(--un-leading, var(--text-${s}--line-height))`,
    }
  }
  else {
    const d = h.bracket.cssvar.global.rem(s)
    if (d)
      return { 'font-size': d }
  }
}

function handlerColorOrSize(match: RegExpMatchArray, ctx: RuleContext<Theme>): CSSObject | undefined {
  if (isCSSMathFn(h.bracket(match[1])))
    return handleSize(match, ctx)
  return createDynamicColorMatcher('color', 'text')(match, ctx)
}

export function splitShorthand(body: string, type: string) {
  const [front, rest] = getStringComponent(body, '[', ']', ['/', ':']) ?? []

  if (front != null) {
    const match = (front.match(bracketTypeRe) ?? [])[1]

    if (match == null || match === type)
      return [front, rest]
  }
}

function parseColor(body: string, theme: Theme) {
  const split = splitShorthand(body, 'color')
  if (!split)
    return

  const [main, opacity] = split
  const colors = main
    .replace(/([a-z])(\d)/g, '$1-$2')
    .split(/-/g)
  const [name] = colors

  if (!name)
    return

  let { no, key, color } = parseThemeColor(theme, colors) ?? parseThemeColor(theme, [main]) ?? {}

  if (!color) {
    const bracket = h.bracketOfColor(main)
    const bracketOrMain = bracket || main

    if (h.numberWithUnit(bracketOrMain))
      return

    if (/^#[\da-f]+$/i.test(bracketOrMain))
      color = bracketOrMain
    else if (/^hex-[\da-fA-F]+$/.test(bracketOrMain))
      color = `#${bracketOrMain.slice(4)}`
    else if (main.startsWith('$'))
      color = h.cssvar(main)

    color = color || bracket
  }

  return {
    opacity,
    name,
    no,
    color,
    cssColor: parseCssColor(color),
    alpha: h.bracket.cssvar.percent(opacity ?? ''),
    key,
  }
}

function parseThemeColor(theme: Theme, keys: string[]) {
  let color: string | undefined
  let no
  let key

  let _keys = keys
  const [scale] = keys.slice(-1)

  if (/^\d+$/.test(scale)) {
    no = scale
    _keys = keys.slice(0, -1)
  }

  const colorData = getThemeColor(theme, _keys)

  if (typeof colorData === 'object') {
    color = colorData[no ?? '400'] as string
    key = [..._keys, no ?? '400'].join('-')
  }
  else if (typeof colorData === 'string' && !no) {
    color = colorData
    key = _keys.join('-')
  }

  if (!color)
    return

  return {
    color,
    no,
    key,
  }
}

function getThemeColor(theme: Theme, keys: string[]) {
  let obj = theme.colors as Theme['colors'] | string
  let index = -1

  for (const k of keys) {
    index += 1
    if (obj && typeof obj !== 'string') {
      const camel = keys.slice(index).join('-').replace(/(-[a-z])/g, n => n.slice(1).toUpperCase())
      if (obj[camel])
        return obj[camel]

      if (obj[k]) {
        obj = obj[k]
        continue
      }
    }
    return undefined
  }

  return obj
}

// const alphaPlaceholders = ['%alpha', '<alpha-value>']
// const alphaPlaceholdersRE = new RegExp(alphaPlaceholders.map(v => escapeRegExp(v)).join('|'))

// function colorToString(color: string, opacity?: string) {
//   if (opacity) {
//     const alpha = h.bracket.cssvar.percent(opacity ?? '')
//     color = color.replace(alphaPlaceholdersRE, alpha ?? '1')
//     return `color-mix(in oklch, ${color} ${opacity}%, transparent)`
//   }
//   return color
// }
