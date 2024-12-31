import type { Rule } from '@unocss/core'
import type { Theme } from '../theme'
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
].flat()
