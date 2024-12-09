import { preflights } from './preflights'
import { theme } from './theme'

export function presetBase() {
  return {
    name: 'preset-base',
    theme,
    preflights,
  }
}
