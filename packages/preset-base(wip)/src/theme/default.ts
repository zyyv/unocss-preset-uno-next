import type { Theme } from './types'
import { animate } from './animate'
import { color } from './colors'
import { blur } from './filters'
import { font, fontWeight, leading, text, tracking } from './font'
import { dropShadow, insetShadow, perspective, radius, shadow, spacing } from './misc'
import { breakpoint, container } from './size'
import { ease } from './transition'

export const theme = {
  font,
  color,
  spacing,
  breakpoint,
  container,
  text,
  fontWeight,
  tracking,
  leading,
  radius,
  shadow,
  insetShadow,
  dropShadow,
  ease,
  animate,
  blur,
  perspective,
} satisfies Theme
