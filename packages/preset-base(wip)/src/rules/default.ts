import type { Rule } from '@unocss/core'
import type { Theme } from '../theme'
import { textAligns, verticalAligns } from './align'
import { margins, paddings } from './spacing'
import { fonts, tabSizes, textIndents, textShadows, textStrokes } from './typography'

export const rules: Rule<Theme>[] = [
  fonts,
  tabSizes,
  textIndents,
  textStrokes,
  textShadows,
  margins,
  paddings,
  textAligns,
  verticalAligns,
].flat()
