import { createGenerator } from 'unocss'
import { expect, it } from 'vitest'
import { presetUnoNext } from '../src/index'

it('presetStarter', async () => {
  const uno = await createGenerator({
    presets: [presetUnoNext()],
  })

  const { css } = await uno.generate('')

  expect(css).toMatchFileSnapshot('./fixtures/theme.css')
})
