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
    'text-xl',
  ], { preflights: false })

  expect(css).toMatchInlineSnapshot(`""`)
})
