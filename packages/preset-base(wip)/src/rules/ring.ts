import type { CSSObject, Rule, RuleContext } from '@unocss/core'
import type { Theme } from '../theme'
import { colorResolver, h, hasParseableColor, isCSSMathFn } from '../utils'
import { varEmpty } from './static'

export const ringBase = {
  '--un-ring-inset': varEmpty,
  '--un-ring-offset-width': '0px',
  '--un-ring-offset-color': '#fff',
  '--un-ring-width': '0px',
  '--un-ring-color': 'rgb(147 197 253 / 0.5)',
  '--un-shadow': '0 0 rgb(0 0 0 / 0)',
}
const preflightKeys = Object.keys(ringBase)

export const rings: Rule<Theme>[] = [
  // ring
  [/^ring(?:-(.+))?$/, (match, ctx) => {
    const [, d] = match
    const v = h.bracket.cssvar.px(d || '1')

    if (v != null && !hasParseableColor(v, ctx.theme)) {
      return {
        '--un-ring-shadow': `var(--un-ring-inset) 0 0 0 calc(${v} + var(--un-ring-offset-width)) var(--un-ring-color, currentColor)`,
        'box-shadow': 'var(--un-inset-shadow), var(--un-inset-ring-shadow), var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow)',
      }
    }

    return colorResolver('--un-ring-color', 'ring')(match, ctx)
  }, { custom: { preflightKeys }, autocomplete: 'ring-$ringWidth' }],
  [/^ring-op(?:acity)?-?(.+)$/, ([, opacity]) => ({ '--un-ring-opacity': h.bracket.percent.cssvar(opacity) }), { autocomplete: 'ring-(op|opacity)-<percent>' }],

  // inset ring
  [/^inset-ring(?:-(.+))?$/, (match, ctx) => {
    const [, d] = match
    const v = h.bracket.cssvar.px(d || '1')

    if (v != null && !hasParseableColor(v, ctx.theme)) {
      return {
        '--un-inset-ring-shadow': `inset 0 0 0 ${v} var(--tw-inset-ring-color, currentColor)`,
        'box-shadow': 'var(--un-inset-shadow), var(--un-inset-ring-shadow), var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow)',
      }
    }

    return colorResolver('--un-inset-ring-color', 'inset-ring')(match, ctx)
  }],
  [/^inset-ring-op(?:acity)?-?(.+)$/, ([, opacity]) => ({ '--un-inset-ring-opacity': h.bracket.percent.cssvar(opacity) }), { autocomplete: 'inset-ring-(op|opacity)-<percent>' }],

  // offset size
  ['ring-offset', { '--un-ring-offset-width': '1px' }],
  [/^ring-offset-(?:width-|size-)?(.+)$/, ([, d]) => ({ '--un-ring-offset-width': h.bracket.cssvar.px(d) }), { autocomplete: 'ring-offset-(width|size)-$lineWidth' }],

  // offset color
  [/^ring-offset(?:-(.+))?$/, (match, ctx) => {
    const [, d] = match
    const v = h.bracket.cssvar.px(d || '1')

    if (v != null && !hasParseableColor(v, ctx.theme)) {
      return {
        '--un-ring-offset-width': v,
        '--un-ring-offset-shadow': 'var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
      }
    }

    return colorResolver('--un-ring-offset-color', 'ring-offset')(match, ctx)
  }, { autocomplete: 'ring-offset-$colors' }],
  [/^ring-offset-op(?:acity)?-?(.+)$/, ([, opacity]) => ({ '--un-ring-offset-opacity': h.bracket.percent.cssvar(opacity) }), { autocomplete: 'ring-offset-(op|opacity)-<percent>' }],

  // style
  ['ring-inset', { '--un-ring-inset': 'inset' }],
]
