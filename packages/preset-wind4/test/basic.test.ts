import { createGenerator, presetUno } from 'unocss'
import { expect, it } from 'vitest'
import { presetWind4 } from '../../preset-wind4/src/index'
import { presetMiniTargets } from './assets/preset-mini-targets'
import { presetWind3Targets } from './assets/preset-wind3-targets'

it('presetStarter', async () => {
  const unoNext = await createGenerator({
    presets: [presetWind4()],
  })

  const uno = await createGenerator({
    presets: [presetUno()],
  })

  const needFixed = []

  let sameString = `## Same Tokens

| Token | Same | UnoNext | Uno |
| --- | --- | --- | --- |
  `

  let differentString = `
## Different Tokens

| Token | Same | UnoNext | Uno |
| --- | --- | --- | --- |
`

  let result = `# Overview

`

  for (const target of presetMiniTargets) {
    const [cssnext, css] = await Promise.all([
      unoNext.generate(target, { preflights: false }).then(r => r.css.replace('/* layer: default */', '').trim()),
      uno.generate(target, { preflights: false }).then(r => r.css.replace('/* layer: default */', '').trim()),
    ])

    if (css && !cssnext) {
      needFixed.push(target)
    }

    const escape = (code: string) => `<code>${code.replace(/\|/g, '\\|').replace(/\n/g, '<br>')}</code>`

    const same = cssnext === css

    if (same) {
      sameString += `| \`${target}\` | ✅ | ${cssnext ? `${escape(cssnext)}` : '❓'} | ${css ? `${escape(css)}` : '❓'} |\n`
    }
    else {
      differentString += `| \`${target}\` | ❌ | ${cssnext ? `${escape(cssnext)}` : '❓'} | ${css ? `${escape(css)}` : '❓'} |\n`
    }
  }

  for (const target of presetWind3Targets) {
    const [cssnext, css] = await Promise.all([
      unoNext.generate(target, { preflights: false }).then(r => r.css.replace('/* layer: default */', '').trim()),
      uno.generate(target, { preflights: false }).then(r => r.css.replace('/* layer: default */', '').trim()),
    ])

    if (css && !cssnext) {
      needFixed.push(target)
    }

    const escape = (code: string) => `<code>${code.replace(/\|/g, '\\|').replace(/\n/g, '<br>')}</code>`

    const same = cssnext === css

    if (same) {
      sameString += `| \`${target}\` | ✅ | ${cssnext ? `${escape(cssnext)}` : '❓'} | ${css ? `${escape(css)}` : '❓'} |\n`
    }
    else {
      differentString += `| \`${target}\` | ❌ | ${cssnext ? `${escape(cssnext)}` : '❓'} | ${css ? `${escape(css)}` : '❓'} |\n`
    }
  }

  result += sameString + differentString

  expect(result).toMatchFileSnapshot('./fixtures/token-different.test.md')
  expect(needFixed).toMatchSnapshot()
})

it('test case', async () => {
  const unoNext = await createGenerator({
    presets: [presetWind4()],
  })

  const cases = [
    // 'border-spacing',
    // 'filter',
    // 'ring',
    // 'placeholder-red-800',
    'divide-y-1',
    '-m4',
  ]

  const { css } = await unoNext.generate(cases, { preflights: false })

  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .-m4{margin:calc(calc(var(--spacing) * 4) * -1);}
    .divide-y-1>:not(:last-child){--un-divide-y-reverse:0;border-top-width:calc(1px * var(--un-divide-y-reverse));border-top-style:var(--un-border-style);border-bottom-width:calc(1px * calc(1 - var(--un-divide-y-reverse)));border-bottom-style:var(--un-border-style);}"
  `)
})
