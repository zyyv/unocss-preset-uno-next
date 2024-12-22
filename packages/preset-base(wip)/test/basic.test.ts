import { createGenerator } from 'unocss'
import { expect, it } from 'vitest'
import { presetBase } from '../src/index'

it('presetStarter', async () => {
  const uno = await createGenerator({
    presets: [presetBase()],
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
    .color-\\#888{color:#888;}
    .color-\\#888\\:20{color:color-mix(in oklch, #888 20%, transparent);}
    .color-red{color:var(--color-red-400);}
    .color-red-500{color:var(--color-red-500);}
    .color-red-500\\:20,
    .color-red-500\\/20{color:color-mix(in oklch, var(--color-red-500) 20%, transparent);}"
  `)
})
