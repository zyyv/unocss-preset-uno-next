import type { Theme } from './types'
import { animate } from './animate'
import { colors } from './colors'
import { blur } from './filters'
import { font, fontWeight, leading, text, textStrokeWidth, tracking } from './font'
import { defaults, dropShadow, insetShadow, perspective, radius, shadow, spacing, textShadow } from './misc'
import { breakpoint, container } from './size'
import { ease, property } from './transition'

export const theme = {
  font,
  colors,
  spacing,
  breakpoint,
  container,
  text,
  fontWeight,
  tracking,
  leading,
  textStrokeWidth,
  radius,
  shadow,
  insetShadow,
  dropShadow,
  textShadow,
  ease,
  animate,
  blur,
  perspective,
  property,
  defaults,
} satisfies Theme
