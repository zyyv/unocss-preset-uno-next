import type { CSSObject, Rule, RuleContext } from '@unocss/core'
import type { Theme } from '../theme'
import { colorResolver, globalKeywords, h, isCSSMathFn } from '../utils'

export const outline: Rule<Theme>[] = [
  // size
  [/^outline-(?:width-|size-)?(.+)$/, handleWidth, { autocomplete: 'outline-(width|size)-<num>' }],

  // color
  [/^outline-(?:color-)?(.+)$/, handleColorOrWidth, { autocomplete: 'outline-$colors' }],

  // offset
  [/^outline-offset-(.+)$/, ([, d]) => ({ 'outline-offset': h.bracket.cssvar.global.px(d) }), { autocomplete: 'outline-(offset)-<num>' }],

  // style
  ['outline', {
    'outline-style': 'var(--un-outline-style)',
    'outline-width': '1px',
  }],
  ...['auto', 'dashed', 'dotted', 'double', 'hidden', 'solid', 'groove', 'ridge', 'inset', 'outset', ...globalKeywords].map(v => [`outline-${v}`, { '--un-outline-style': v, 'outline-style': v }] as Rule<Theme>),
  ['outline-none', { 'outline': '2px solid transparent', 'outline-offset': '2px' }],
]

function handleWidth([, b]: string[]): CSSObject | undefined {
  const v = h.bracket.cssvar.global.px(b)
  if (v != null) {
    return {
      'outline-style': 'var(--un-outline-style)',
      'outline-width': v,
    }
  }
}

function handleColorOrWidth(match: RegExpMatchArray, ctx: RuleContext<Theme>): CSSObject | undefined {
  if (isCSSMathFn(h.bracket(match[1])))
    return handleWidth(match)
  return colorResolver('outline-color', 'outline-color')(match, ctx) as CSSObject | undefined
}

export const appearance: Rule[] = [
  ['appearance-auto', { '-webkit-appearance': 'auto', 'appearance': 'auto' }],
  ['appearance-none', { '-webkit-appearance': 'none', 'appearance': 'none' }],
]

function willChangeProperty(prop: string): string | undefined {
  return h.properties.auto.global(prop) ?? {
    contents: 'contents',
    scroll: 'scroll-position',
  }[prop]
}

export const willChange: Rule[] = [
  [/^will-change-(.+)/, ([, p]) => ({ 'will-change': willChangeProperty(p) })],
]
