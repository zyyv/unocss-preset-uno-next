import type { Theme } from '../theme/types'
import { escapeRegExp, type Preflight } from '@unocss/core'
import { camelToHyphen, passThemeKey } from '../utils'

const alphaPlaceholders = ['%alpha', '<alpha-value>']
const alphaPlaceholdersRE = new RegExp(alphaPlaceholders.map(v => escapeRegExp(v)).join('|'))

function themeToCSSVars(theme: Theme): string {
  let cssVariables = ''

  function process(obj: any, prefix: string) {
    for (const key in obj) {
      if (key === 'DEFAULT' && Object.keys(obj).length === 1) {
        cssVariables += `${camelToHyphen(`--${prefix}`)}: ${obj[key].replace(alphaPlaceholdersRE, '1')};\n`
      }

      if (passThemeKey.includes(key))
        continue

      if (Array.isArray(obj[key])) {
        cssVariables += `${camelToHyphen(`--${prefix}-${key}`)}: ${obj[key].join(',').replace(alphaPlaceholdersRE, '1')};\n`
      }
      else if (typeof obj[key] === 'object') {
        process(obj[key], `${prefix}-${key}`)
      }
      else {
        cssVariables += `${camelToHyphen(`--${prefix}-${key}`)}: ${obj[key].replace(alphaPlaceholdersRE, '1')};\n`
      }
    }
  }

  for (const key in theme) {
    process((theme as any)[key], key)
  }

  return cssVariables
}

export function theme(): Preflight<Theme> {
  return {
    layer: 'theme',
    getCSS({ theme }) {
      return `
:root {
${themeToCSSVars(theme).trim()}
}`.trim()
    },
  }
}
