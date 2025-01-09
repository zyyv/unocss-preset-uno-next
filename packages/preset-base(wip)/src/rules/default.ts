import type { Rule } from '@unocss/core'
import type { Theme } from '../theme'
import { textAligns, verticalAligns } from './align'
import { appearance, outline, willChange } from './behaviors'
import { borders } from './border'
import { bgColors, colorScheme, opacity } from './color'
import { containerParent } from './container'
import { textDecorations } from './decoration'
import { flex } from './flex'
import { gaps } from './gap'
import { grids } from './grid'
import { rings } from './ring'
import { boxShadows } from './shadow'
import { sizes } from './size'
import { margins, paddings } from './spacing'
import { transforms } from './transform'
import { transitions } from './transition'
import { fonts, tabSizes, textIndents, textShadows, textStrokes } from './typography'
import { cssProperty, cssVariables } from './variables'

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
  appearance,
  outline,
  willChange,
  borders,
  bgColors,
  opacity,
  colorScheme,
  containerParent,
  textDecorations,
  flex,
  gaps,
  grids,
  sizes,
  rings,
  boxShadows,
  transforms,
  transitions,
  cssVariables,
  cssProperty,
].flat()
