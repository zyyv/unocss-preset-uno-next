import type { Variant } from '@unocss/core'
import type { PresetMiniOptions } from '..'
import type { Theme } from '../theme'
import { variantBreakpoints } from './breakpoints'

export function variants(options: PresetMiniOptions): Variant<Theme>[] {
  return [

    variantBreakpoints(),
  ]
}
