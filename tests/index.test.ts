import { createGenerator } from 'unocss'
import { expect, it } from 'vitest'
import { presetWindV4 } from '../packages/preset-mini/src'

it('presetStarter', async () => {
  const uno = await createGenerator({
    presets: [presetWindV4()],
  })

  const { css } = await uno.generate('text-red', { preflights: false })

  expect(css).toMatchInlineSnapshot(`""`)
})
