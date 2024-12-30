import type { Rule } from '@unocss/core'
import type { Theme } from '../theme'
import { fonts, tabSizes, textIndents, textStrokes } from './typography'

export const rules: Rule<Theme>[] = [
  fonts,
  tabSizes,
  textIndents,
  textStrokes,
].flat()
