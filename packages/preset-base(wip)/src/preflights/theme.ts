import type { Theme } from '../theme/types'
import { escapeRegExp, type Preflight } from '@unocss/core'

const alphaPlaceholders = ['%alpha', '<alpha-value>']
const alphaPlaceholdersRE = new RegExp(alphaPlaceholders.map(v => escapeRegExp(v)).join('|'))

function camelToHyphen(str: string) {
  return str.replace(/[A-Z]/g, '-$&').toLowerCase()
}

function themeToCSSVars(theme: Theme): string {
  let cssVariables = ''

  function process(obj: any, prefix: string) {
    for (const key in obj) {
      if (key === 'DEFAULT') {
        if (Object.keys(obj).length === 1) {
          cssVariables += `--${prefix}: ${obj[key].replace(alphaPlaceholdersRE, '1')};\n`
        }
        continue
      }
      if (typeof obj[key] === 'object') {
        process(obj[key], `${prefix}-${key}`)
      }
      else {
        cssVariables += `--${prefix}-${key}: ${obj[key].replace(alphaPlaceholdersRE, '1')};\n`
      }
    }
  }

  for (const key in theme) {
    process((theme as any)[key], camelToHyphen(key))
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
