import type { CSSEntries, DynamicMatcher, RuleContext, StaticRule } from '@unocss/core'
import type { ParsedColorValue } from '@unocss/rule-utils'
import type { Theme } from '../theme'
import { toArray } from '@unocss/core'
import { colorToString, getStringComponent, getStringComponents, parseCssColor } from '@unocss/rule-utils'
import { h } from './handlers'
import { bracketTypeRe, numberWithUnitRE, splitComma } from './handlers/regex'
import { cssMathFnRE, cssVarFnRE, directionMap, globalKeywords, xyzArray, xyzMap } from './mappings'

export const CONTROL_MINI_NO_NEGATIVE = '$$mini-no-negative'

/**
 * Provide {@link DynamicMatcher} function returning spacing definition. See spacing rules.
 *
 * @param propertyPrefix - Property for the css value to be created. Postfix will be appended according to direction matched.
 * @see {@link directionMap}
 */
export function directionSize(propertyPrefix: string): DynamicMatcher<Theme> {
  const spaceMap = {
    'xs': 0.75 / 0.25,
    'sm': 0.875 / 0.25,
    'lg': 1.125 / 0.25,
    'xl': 1.25 / 0.25,
    '2xl': 1.5 / 0.25,
    '3xl': 1.875 / 0.25,
    '4xl': 2.25 / 0.25,
    '5xl': 3 / 0.25,
    '6xl': 3.75 / 0.25,
    '7xl': 4.5 / 0.25,
    '8xl': 6 / 0.25,
    '9xl': 8 / 0.25,
  }

  return (([_, direction, size]: string[]): CSSEntries | undefined => {
    let v = h.bracket.cssvar.global.auto.rem(size)

    if (v != null) {
      return directionMap[direction].map(i => [`${propertyPrefix}${i}`, v])
    }

    v = h.fraction.number(size)
    if (v != null) {
      if (v.endsWith('%')) {
        const num = Number(v.slice(0, -1)) / 100
      }

      return directionMap[direction].map(i => [`${propertyPrefix}${i}`, v])
    }

    // if (spaceMap[size as keyof typeof spaceMap]) {
    //   v = `calc(var(--spacing) * ${spaceMap[size as keyof typeof spaceMap]})`
    // }
    // else {
    //   v = h.bracket.cssvar.global.auto.fraction.rem(size)
    // }

    // if (v != null) {
    //   return directionMap[direction].map(i => [`${propertyPrefix}${i}`, v])
    // }
    // else if (size?.startsWith('-')) {
    //   const _v = spaceMap[size.slice(1) as keyof typeof spaceMap]
    //   if (_v != null) {
    //     v = `calc(var(--spacing) * -${_v})`
    //     return directionMap[direction].map(i => [`${propertyPrefix}${i}`, v])
    //   }
    // }
  }) as DynamicMatcher<Theme>
}

// type ThemeColorKeys = 'color' | 'borderColor' | 'backgroundColor' | 'textColor' | 'shadowColor' | 'accentColor'

function getThemeColorForKey(theme: Theme, colors: string[]) {
  let obj = theme.colors as Theme['colors'] | string
  let index = -1

  for (const c of colors) {
    index += 1
    if (obj && typeof obj !== 'string') {
      const camel = colors.slice(index).join('-').replace(/(-[a-z])/g, n => n.slice(1).toUpperCase())
      if (obj[camel])
        return obj[camel]

      if (obj[c]) {
        obj = obj[c]
        continue
      }
    }
    return undefined
  }

  return obj
}

/**
 * Obtain color from theme by camel-casing colors.
 */
function getThemeColor(theme: Theme, colors: string[]) {
  return getThemeColorForKey(theme, colors)
}

/**
 * Split utility shorthand delimited by / or :
 */
export function splitShorthand(body: string, type: string) {
  const [front, rest] = getStringComponent(body, '[', ']', ['/', ':']) ?? []

  if (front != null) {
    const match = (front.match(bracketTypeRe) ?? [])[1]

    if (match == null || match === type)
      return [front, rest]
  }
}

/**
 * Parse color string into {@link ParsedColorValue} (if possible). Color value will first be matched to theme object before parsing.
 * See also color.tests.ts for more examples.
 *
 * @example Parseable strings:
 * 'red' // From theme, if 'red' is available
 * 'red-100' // From theme, plus scale
 * 'red-100/20' // From theme, plus scale/opacity
 * '[rgb(100 2 3)]/[var(--op)]' // Bracket with rgb color and bracket with opacity
 *
 * @param body - Color string to be parsed.
 * @param theme - {@link Theme} object.
 * @return object if string is parseable.
 */
export function parseColor(body: string, theme: Theme): ParsedColorValue | undefined {
  const split = splitShorthand(body, 'color')
  if (!split)
    return

  const [main, opacity] = split
  const colors = main
    .replace(/([a-z])(\d)/g, '$1-$2')
    .split(/-/g)
  const [name] = colors

  if (!name)
    return

  let color: string | undefined
  let no = 'DEFAULT'

  if (theme.colors?.[name]) {
    let colorData
    const [scale] = colors.slice(-1)
    if (/^\d+$/.test(scale)) {
      no = scale
      colorData = getThemeColor(theme, colors.slice(0, -1))
      if (!colorData || typeof colorData === 'string')
        color = undefined
      else
        color = colorData[no] as string
    }
    else {
      colorData = getThemeColor(theme, colors)
      if (!colorData && colors.length <= 2) {
        [, no = no] = colors
        colorData = getThemeColor(theme, [name])
      }
      if (typeof colorData === 'string')
        color = colorData
      else if (no && colorData)
        color = colorData[no] as string
    }
  }

  const bracket = h.bracketOfColor(main)
  const bracketOrMain = bracket || main

  if (h.numberWithUnit(bracketOrMain))
    return

  if (/^#[\da-f]+$/i.test(bracketOrMain))
    color = bracketOrMain
  else if (/^hex-[\da-fA-F]+$/.test(bracketOrMain))
    color = `#${bracketOrMain.slice(4)}`
  else if (main.startsWith('$'))
    color = h.cssvar(main)

  color = color || bracket

  if (!color) {
    const colorData = getThemeColor(theme, [main])
    if (typeof colorData === 'string')
      color = colorData
  }

  return {
    opacity,
    name,
    no,
    color,
    cssColor: parseCssColor(color),
    alpha: h.bracket.cssvar.percent(opacity ?? ''),
  }
}

export function colorableShadows(shadows: string | string[], colorVar: string) {
  const colored = []
  shadows = toArray(shadows)
  for (let i = 0; i < shadows.length; i++) {
    // shadow values are between 3 to 6 terms including color
    const components = getStringComponents(shadows[i], ' ', 6)
    if (!components || components.length < 3)
      return shadows

    let isInset = false
    const pos = components.indexOf('inset')
    if (pos !== -1) {
      components.splice(pos, 1)
      isInset = true
    }

    let colorVarValue = ''
    const lastComp = components.at(-1)
    if (parseCssColor(components.at(0))) {
      const color = parseCssColor(components.shift())
      if (color)
        colorVarValue = `, ${colorToString(color)}`
    }
    else if (parseCssColor(lastComp)) {
      const color = parseCssColor(components.pop())
      if (color)
        colorVarValue = `, ${colorToString(color)}`
    }
    else if (lastComp && cssVarFnRE.test(lastComp)) {
      const color = components.pop()!
      colorVarValue = `, ${color}`
    }

    colored.push(`${isInset ? 'inset ' : ''}${components.join(' ')} var(${colorVar}${colorVarValue})`)
  }

  return colored
}

export function colorVariable(str: string, varName: string) {
  // TODO: Optimize regex
  // eslint-disable-next-line regexp/no-super-linear-backtracking
  const colorRegex = /(#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b|rgb(a)?\(\s*\d+(?:\s+\d*)?\s*\d*(\s*\/\s*[\d.]+)?\s*\)|hsl(a)?\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%(\s*,\s*[\d.]+)?\s*\))/g
  return str.replace(colorRegex, match => `var(--${varName}, ${match})`)
}

export function hasParseableColor(color: string | undefined, theme: Theme) {
  return color != null && !!parseColor(color, theme)?.color
}

// const reLetters = /[a-z]+/gi
// const resolvedBreakpoints = new WeakMap<any, { point: string, size: string }[]>()

// export function resolveBreakpoints({ theme, generator }: Readonly<VariantContext<Theme>>, key: 'breakpoints' | 'verticalBreakpoints' = 'breakpoints') {
//   const breakpoints: Record<string, string> | undefined = (generator?.userConfig?.theme as any)?.[key] || theme[key]

//   if (!breakpoints)
//     return undefined

//   if (resolvedBreakpoints.has(theme))
//     return resolvedBreakpoints.get(theme)

//   const resolved = Object.entries(breakpoints)
//     .sort((a, b) => Number.parseInt(a[1].replace(reLetters, '')) - Number.parseInt(b[1].replace(reLetters, '')))
//     .map(([point, size]) => ({ point, size }))

//   resolvedBreakpoints.set(theme, resolved)
//   return resolved
// }

// export function resolveVerticalBreakpoints(context: Readonly<VariantContext<Theme>>) {
//   return resolveBreakpoints(context, 'verticalBreakpoints')
// }

export function makeGlobalStaticRules(prefix: string, property?: string): StaticRule[] {
  return globalKeywords.map(keyword => [`${prefix}-${keyword}`, { [property ?? prefix]: keyword }])
}

export function isCSSMathFn(value: string | undefined) {
  return value != null && cssMathFnRE.test(value)
}

export function isSize(str: string) {
  if (str[0] === '[' && str.slice(-1) === ']')
    str = str.slice(1, -1)
  return cssMathFnRE.test(str) || numberWithUnitRE.test(str)
}

export function transformXYZ(d: string, v: string, name: string): [string, string][] {
  const values: string[] = v.split(splitComma)
  if (d || (!d && values.length === 1))
    return xyzMap[d].map((i): [string, string] => [`--un-${name}${i}`, v])

  return values.map((v, i) => [`--un-${name}-${xyzArray[i]}`, v])
}
