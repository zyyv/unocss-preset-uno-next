import { definePreset } from '@unocss/core'

export interface StarterOptions {
  /**
   *  The number of columns in the grid system (Example option)
   *
   * @default 12
   */
  span?: number
}

export const presetStarter = definePreset((_options: StarterOptions = {}) => {
  const span = _options.span ?? 12

  return {
    name: 'unocss-preset-starter',

    theme: {
      // Customize your theme here
    },

    // Customize your preset here
    rules: [
      ['custom-rule', { color: 'red' }],
      [
        /col-(\d+)/,
        ([_, s]) => ({ width: `calc(${s} / ${span} * 100%)` }),
        { autocomplete: 'col-<span>' },
      ],
    ],

    // Customize your variants here
    variants: [
      {
        name: '@active',
        match(matcher) {
          if (!matcher.startsWith('@active'))
            return matcher

          return {
            matcher: matcher.slice(8),
            selector: s => `${s}.active`,
          }
        },
      },
    ],

    // You can also define built-in presets
    presets: [
      // ...
    ],

    // You can also define built-in transformers
    transformers: [
      // ...
    ],

    // Customize AutoComplete
    autocomplete: {
      shorthands: {
        span: Array.from({ length: span }, (_, i) => `${i + 1}`),
      },
    },
  }
})
