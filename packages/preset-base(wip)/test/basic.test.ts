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
    'color-red',
    'color-red-500',
    'color-red-500:20',
    'color-red-500/20',
    'color-#888',
    'color-#888:20',
    'color-foo/20',
  ], { preflights: false })

  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .color-\\#888{--un-text-opacity:100%;color:color-mix(in oklch, #888 var(--un-text-opacity), transparent);}
    .color-\\#888\\:20{--un-text-opacity:20%;color:color-mix(in oklch, #888 var(--un-text-opacity), transparent);}
    .color-foo\\/20{--un-text-opacity:20%;color:color-mix(in oklch, var(--color-foo) var(--un-text-opacity), transparent);}
    .color-red{--un-text-opacity:100%;color:color-mix(in oklch, var(--color-red-400) var(--un-text-opacity), transparent);}
    .color-red-500{--un-text-opacity:100%;color:color-mix(in oklch, var(--color-red-500) var(--un-text-opacity), transparent);}
    .color-red-500\\:20,
    .color-red-500\\/20{--un-text-opacity:20%;color:color-mix(in oklch, var(--color-red-500) var(--un-text-opacity), transparent);}"
  `)
})
