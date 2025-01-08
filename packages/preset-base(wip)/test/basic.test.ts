import { createGenerator } from 'unocss'
import { expect, it } from 'vitest'
import { presetBase } from '../src/index'
import { colorToString, getStringComponents, parseCssColor } from '../src/utils'

it('presetStarter', async () => {
  const uno = await createGenerator({
    presets: [presetBase()],
    theme: {
      color: {
        foo: 'rgb(255 0 0 / <alpha-value>)',
      },
    } as any,
  })

  const { css } = await uno.generate([
    // 'color-red',
    // 'color-red-500',
    // 'color-red-500:20',
    // 'color-red-500/20',
    // 'color-#888',
    // 'color-#888:20',
    // 'color-foo/20',
    // 'text-red',
    // 'text-red',
    // 'text-op-20',
    // 'fw-200',
    // 'fw-normal',
    // 'lh-2',
    // 'leading-normal',
    // 'indent-4',
    // 'text-stroke',
    // 'text-stroke-sm',
    // 'text-stroke-none',
    // 'text-stroke-red',
    // 'text-stroke-op-20',
    // 'text-shadow',
    // 'text-shadow-color-red',
    // 'text-shadow-color-op-50',
    // 'm-4',
    // 'm--2',
    // 'm-1/2',
    // 'ma',
    // 'm--xs',
    // 'm-xs',
    // 'mx-4',
    // 'text-left',
    // 'outline',
    // 'outline-2',
    // 'outline-none',
    // 'outline-red/20',
    // 'b',
    // 'b-dashed',
    // 'b-none',
    // 'b-red',
    // 'b-x-red',
    // 'b-op-50',
    // 'b-x-op-50',
    // 'b-bs-teal/20',
    // 'rd',
    // 'rd-4',
    // 'rd-xs',
    // 'rd-full',
    // 'op-20',
    // 'bg-red',
    // 'bg-red-500',
    // 'bg-red-500:20',
    // 'bg-red-500/20',
    // 'bg-[length:100%_100%]',

    // 'translate-x-2',
    // 'translate-z-2',
    // 'translate-2',
    // 'rotate-2',
    // 'rotate-x-2',
    // 'rotate-y-2',
    // 'rotate-z-2',
    // 'translate-[var(--foo),var(--bar)]',
    // 'skew-2',
    // 'skew-x-2',
    // 'skew-y-2',

    // 'scale-2',
    // 'scale-x-2',
    // 'scale-z-2',

    // 'transition',
    // 'transition-colors-200',
    // 'transition-colors',
    // 'ease-in-out',

    // 'shadow',
    // 'shadow-red',
    // 'inset-ring',
    // 'inset-ring-4',
    // 'inset-ring-red',
    // 'inset-ring-red:20',
    // 'inset-ring-op-20',
    'ring',
    'ring-4',
  ], { preflights: false })

  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .ring{--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(1px + var(--un-ring-offset-width)) var(--un-ring-color, currentColor);box-shadow:var(--un-inset-shadow), var(--un-inset-ring-shadow), var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
    .ring-4{--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(4px + var(--un-ring-offset-width)) var(--un-ring-color, currentColor);box-shadow:var(--un-inset-shadow), var(--un-inset-ring-shadow), var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}"
  `)

  expect(getStringComponents(`var(--un-shadow-inset) 0 1px rgb(0 0 0 / 0.05)`, ' ', 6)).toMatchInlineSnapshot(`
    [
      "var(--un-shadow-inset)",
      "0",
      "1px",
      "rgb(0 0 0 / 0.05)",
    ]
  `)

  expect(parseCssColor(`rgb(0 0 0 / 0.05)`)).toMatchInlineSnapshot(`
    {
      "alpha": "0.05",
      "components": [
        "0",
        "0",
        "0",
      ],
      "type": "rgb",
    }
  `)

  expect(colorToString(parseCssColor(`rgb(0 0 0 / 0.05)`)!)).toMatchInlineSnapshot(`"rgb(0 0 0 / 0.05)"`)
})
