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
import { alignments, boxSizing, flexGridJustifiesAlignments, floats, insets, justifies, orders, placements, positions, zIndexes } from './position'
import { rings } from './ring'
import { boxShadows } from './shadow'
import { aspectRatio, sizes } from './size'
import { margins, paddings } from './spacing'
import { appearances, breaks, contains, contents, contentVisibility, cursors, displays, fontSmoothings, fontStyles, pointerEvents, resizes, textOverflows, textTransforms, textWraps, userSelects, whitespaces } from './static'
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
  aspectRatio,
  displays,
  appearances,
  cursors,
  contains,
  pointerEvents,
  resizes,
  userSelects,
  whitespaces,
  contentVisibility,
  contents,
  breaks,
  textWraps,
  textOverflows,
  textTransforms,
  fontStyles,
  fontSmoothings,
  rings,
  boxShadows,
  transforms,
  transitions,
  cssVariables,
  cssProperty,
  alignments,
  boxSizing,
  flexGridJustifiesAlignments,
  floats,
  insets,
  justifies,
  orders,
  placements,
  positions,
  zIndexes,
].flat()
