import type { CSSObject } from '@unocss/core'

export interface Colors {
  [key: string]: Colors | string
}

export interface Theme {
  font?: Record<string, string>
  color?: Colors
  spacing?: Record<string, string>
  breakpoint?: Record<string, string>
  container?: Record<string, string>
  text: Record<string, string | [string, string | CSSObject] | [string, string, string] | CSSObject>
  fontWeight?: Record<string, string>
  tracking?: Record<string, string>
  leading?: Record<string, string>
  radius?: Record<string, string>
  shadow?: Record<string, string>
  insetShadow?: Record<string, string>
  dropShadow?: Record<string, string>
  ease?: Record<string, string>
  animate?: Record<string, string>
  blur?: Record<string, string>
  perspective?: Record<string, string>
}
