import type { Preflight } from '@unocss/core'
import type { Theme } from '../theme/types'
import { animate } from './animate'
import { theme } from './theme'

export const preflights: Preflight<Theme>[] = [
  theme(),
  animate(),
]
