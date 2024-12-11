import type { CSSObject, Rule, RuleContext } from '@unocss/core'
import type { Theme } from '../theme'
import { toArray } from '@unocss/core'
import { colorOpacityToString, colorResolver, colorToString, h, isCSSMathFn, parseColor, splitShorthand } from '../utils'

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

    const { alpha, color, cssColor } = data
    const isDev = generator.config.envMode === 'dev'
    const rawColorComment = isDev && color ? ` /* ${color} */` : ''
    const css: CSSObject = {}
    if (cssColor) {
      if (alpha != null) {
        css.color = colorToString(cssColor, alpha) + rawColorComment
      }
      else {
        const opacityVar = `--un-text-opacity`
        const result = colorToString(cssColor, `var(${opacityVar})`)
        if (result.includes(opacityVar))
          css[opacityVar] = colorOpacityToString(cssColor)
        css.color = result + rawColorComment
      }
    }
    else if (color) {
      if (alpha != null) {
        css.color = colorToString(color, alpha) + rawColorComment
      }
      else {
        const opacityVar = `--un-text-opacity`
        const result = colorToString(color, `var(${opacityVar})`)
        if (result.includes(opacityVar))
          css[opacityVar] = 1
        css.color = result + rawColorComment
      }
    }

    return css
  }],
]
