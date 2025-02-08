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

  result += sameString + differentString

  expect(result).toMatchFileSnapshot('./fixtures/token-different.test.md')
  expect(needFixed).toMatchSnapshot()
})

it('test case', async () => {
  const unoNext = await createGenerator({
    presets: [presetUnoNext()],
  })

  const { css } = await unoNext.generate('outline-color-red-100', { preflights: false })

  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .outline-color-red-100{--un-outline-color-opacity:100%;outline-color:color-mix(in oklch, var(--color-red-100) var(--un-outline-color-opacity), transparent);}"
  `)
})
