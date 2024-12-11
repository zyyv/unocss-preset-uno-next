import { preflights } from './preflights'
import { rules } from './rules/default'
import { theme } from './theme'

export function presetBase() {
  return {
    name: 'preset-base',
    rules,
    theme,
    preflights,
  }
}
