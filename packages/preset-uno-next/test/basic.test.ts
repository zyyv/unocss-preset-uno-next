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

    // 'ring',
    // 'ring-4',
    // 'ring-$asd',
    // 'ring-red',

    // 'ring-offset-red',

    // 'size-max',
    // 'size-5',
    // 'size-5rem',
    // 'size-1/2',
    // 'size-2px',

    // 'max-w-5',
    // 'w-5',
    // 'w-full',
    'w-lg',
    'w-prose',
    'w-screen',
    'h-screen',
    'size-screen',
    'w-screen-xl',
    'w-xl',
    // 'w-1/2',
    // 'w-5rem',
    // 'block-5',
    // 'inline-5',

  ], { preflights: false })

  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .size-screen{width:100vw;height:100vh;}
    .h-screen{height:100vh;}
    .w-lg{width:32rem;}
    .w-prose{width:65ch;}
    .w-screen{width:100vw;}
    .w-xl{width:36rem;}
    .w-screen-xl{width:80rem;}"
  `)
})
