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

  const sameTargets: string[] = []
  const differentTargets: {
    token: string
    css: {
      unonext: string
      uno: string
    }
  }[] = []

  const ps = presetMiniTargets.map(async (target) => {
    const [cssnext, css] = await Promise.all([
      unoNext.generate(target, { preflights: false }).then(r => r.css),
      uno.generate(target, { preflights: false }).then(r => r.css),
    ])

    if (cssnext === css) {
      sameTargets.push(target)
    }
    else {
      differentTargets.push({
        token: target,
        css: {
          unonext: cssnext.replace('/* layer: default */', '').trim(),
          uno: css.replace('/* layer: default */', '').trim(),
        },
      })
    }
  })

  await Promise.all(ps)

  await expect({
    length: sameTargets.length,
    data: sameTargets,
  }).toMatchFileSnapshot('./fixtures/same-targets.json')
  await expect({
    length: differentTargets.length,
    data: differentTargets,
  }).toMatchFileSnapshot('./fixtures/different-targets.json')
})
