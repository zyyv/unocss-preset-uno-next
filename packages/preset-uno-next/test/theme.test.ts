import { createGenerator } from 'unocss'
import { expect, it } from 'vitest'
import { presetBase } from '../src/index'

it('presetStarter', async () => {
  const uno = await createGenerator({
    presets: [presetBase()],
  })

  const { css } = await uno.generate('')

  expect(css).toMatchFileSnapshot('./fixtures/theme.css')
})
