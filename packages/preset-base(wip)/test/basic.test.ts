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

  ], { preflights: false })

  expect(css).toMatchInlineSnapshot(`""`)
})
