import { createGenerator, presetUno } from 'unocss'
import { expect, it } from 'vitest'
import { presetUnoNext } from '../src/index'
import { presetMiniTargets } from './assets/preset-mini-targets'

it('presetStarter', async () => {
  const unoNext = await createGenerator({
    presets: [presetUnoNext()],
  })

  const uno = await createGenerator({
    presets: [presetUno()],
  })

  /*
| Token | UnoNext | Uno | Same |
| --- | --- | --- | --- |
|  |  |  | |
   */

  let result = `
| Token | Same | UnoNext | Uno |
| --- | --- | --- | --- |
`.trim()

  for (const target of presetMiniTargets) {
    const [cssnext, css] = await Promise.all([
      unoNext.generate(target, { preflights: false }).then(r => r.css.replace('/* layer: default */', '').trim()),
      uno.generate(target, { preflights: false }).then(r => r.css.replace('/* layer: default */', '').trim()),
    ])

    const same = cssnext === css
    result += `| ${target} | ${same ? '✅' : '❌'} | \`${cssnext}\` | \`${css}\` |\n`
  }

  expect(result).toMatchFileSnapshot('./fixtures/token-different.test.md')
})
