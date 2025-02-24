import { createGenerator } from 'unocss'
import { expect, it } from 'vitest'
import { presetWind4 } from '../../preset-wind4/src/index'

it('presetStarter', async () => {
  const uno = await createGenerator({
    presets: [presetWind4()],
  })

  const { css } = await uno.generate('')

  expect(css).toMatchFileSnapshot('./fixtures/theme.css')
})
