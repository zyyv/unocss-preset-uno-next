import { createGenerator, presetUno } from 'unocss'
import { expect, it } from 'vitest'
import { presetUnoNext } from '../src/index'
import { presetMiniTargets } from './assets/preset-mini-targets'
import { presetWind3Targets } from './assets/preset-wind3-targets'

it('presetStarter', async () => {
  const unoNext = await createGenerator({
    presets: [presetUnoNext()],
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
    presets: [presetUnoNext()],
  })

  const cases = ['scroll-m-7', 'm-7px', 'm-9', 'm-1/2']

  const { css } = await unoNext.generate(cases, { preflights: false })

  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .m-1\\/2{margin:50%;}
    .m-7px{margin:7px;}
    .m-9{margin:calc(var(--spacing) * 9);}
    .scroll-m-7{scroll-margin:calc(var(--spacing) * 7);}"
  `)
})
