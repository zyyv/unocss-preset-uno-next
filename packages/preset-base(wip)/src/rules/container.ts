import type { Rule } from '@unocss/core'
import type { Theme } from '../theme'

export const containerParent: Rule<Theme>[] = [
  [/^@container(?:\/(\w+))?(?:-(normal))?$/, ([, l, v]) => {
    return {
      'container-type': v ?? 'inline-size',
      'container-name': l,
    }
  }],
]
