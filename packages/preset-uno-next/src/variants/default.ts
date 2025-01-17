import type { Variant } from '@unocss/core'
import type { PresetMiniOptions } from '..'
import type { Theme } from '../theme'
import { variantBreakpoints } from './breakpoints'
import { variantChildren } from './children'
import { variantCombinators } from './combinators'
import { variantContainerQuery } from './container'

export function variants(options: PresetMiniOptions): Variant<Theme>[] {
  return [
    variantChildren,
    variantCombinators,
    variantBreakpoints(),
    variantContainerQuery,
  ].flat()
}
