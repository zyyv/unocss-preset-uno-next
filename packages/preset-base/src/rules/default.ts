import type { Rule } from '@unocss/core'
import type { Theme } from '../theme'
import { fonts } from './typography'

export const rules: Rule<Theme>[] = [
  fonts,
].flat()
