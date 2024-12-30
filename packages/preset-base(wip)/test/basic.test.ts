import { createGenerator } from 'unocss'
import { expect, it } from 'vitest'
import { presetBase } from '../src/index'

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
    'text-stroke-red',
    'text-stroke-op-20',
  ], { preflights: false })

  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .text-stroke-red{--un-text-stroke-opacity:100%;-webkit-text-stroke-color:color-mix(in oklch, var(--color-red-400) var(--un-text-stroke-opacity), transparent);}
    .text-stroke-op-20{--un-text-stroke-opacity:20%;}"
  `)
})
