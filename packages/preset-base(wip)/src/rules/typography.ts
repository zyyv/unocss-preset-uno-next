import type { CSSObject, Rule } from '@unocss/core'
import type { Theme } from '../theme'
import { getStringComponent, h, parseCssColor } from '../utils'
import { bracketTypeRe } from '../utils/handlers/regex'

export const fonts: Rule<Theme>[] = [
  // text
  // [/^text-(.+)$/, handleText, { autocomplete: 'text-$fontSize' }],

  // // text size
  // [/^(?:text|font)-size-(.+)$/, handleSize, { autocomplete: 'text-size-$fontSize' }],

  // // text colors
  // [/^text-(?:color-)?(.+)$/, handlerColorOrSize, { autocomplete: 'text-$colors' }],

  // colors
  [/^(?:color|c)-(.+)$/, ([, body], { theme, generator }): CSSObject | undefined => {
    const data = parseColor(body, theme)
    if (!data)
      return

    const { color, key, opacity } = data
    const rawColorComment = generator.config.envMode === 'dev' && color ? ` /* ${color} */` : ''
    const css: CSSObject = {}

    if (color) {
      css['--un-text-opacity'] = `${opacity || 100}%`
      const value = key ? `var(--color-${key})` : color
      css.color = `color-mix(in oklch, ${value} var(--un-text-opacity), transparent)${rawColorComment}`
    }

    return css
  }],
]

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
  let obj = theme.color as Theme['color'] | string
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
