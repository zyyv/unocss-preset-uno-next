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

  const cases = [
    'bg-linear-to-t',
    'bg-linear-to-tl',
    'from-current',
    'from-green-600',
    'from-green-600/60',
    'from-transparent',
    'to-current',
    'to-green-600',
    'to-green-600/60',
    'to-transparent',
    'via-current',
    'via-green-600',
    'via-green-600/40',
    'via-transparent',
    'via-opacity-40',
    'bg-linear-[70deg,blue,pink]',
    'stops-[blue,pink]',
  ]

  const { css } = await unoNext.generate(cases, { preflights: false })

  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .bg-linear-\\[70deg\\,blue\\,pink\\]{--un-gradient-position:70deg,blue,pink;background-image:linear-gradient(var(--un-gradient-stops,70deg,blue,pink));}
    .from-current{--un-gradient-from:currentColor;--un-gradient-stops:var(--un-gradient-via-stops, var(--un-gradient-position), var(--un-gradient-from) var(--un-gradient-from-position), var(--un-gradient-to) var(--un-gradient-to-position));}
    .from-green-600{--un-from-opacity:100%;--un-gradient-from:color-mix(in oklab, var(--color-green-600) var(--un-from-opacity), transparent);--un-gradient-stops:var(--un-gradient-via-stops, var(--un-gradient-position), var(--un-gradient-from) var(--un-gradient-from-position), var(--un-gradient-to) var(--un-gradient-to-position));}
    .from-green-600\\/60{--un-from-opacity:60%;--un-gradient-from:color-mix(in oklab, var(--color-green-600) var(--un-from-opacity), transparent);--un-gradient-stops:var(--un-gradient-via-stops, var(--un-gradient-position), var(--un-gradient-from) var(--un-gradient-from-position), var(--un-gradient-to) var(--un-gradient-to-position));}
    .from-transparent{--un-gradient-from:transparent;--un-gradient-stops:var(--un-gradient-via-stops, var(--un-gradient-position), var(--un-gradient-from) var(--un-gradient-from-position), var(--un-gradient-to) var(--un-gradient-to-position));}
    .stops-\\[blue\\,pink\\]{--un-stops-opacity:100%;--un-gradient-stops:color-mix(in oklab, blue,pink var(--un-stops-opacity), transparent);}
    .to-current{--un-gradient-to:currentColor;--un-gradient-stops:var(--un-gradient-via-stops, var(--un-gradient-position), var(--un-gradient-from) var(--un-gradient-from-position), var(--un-gradient-to) var(--un-gradient-to-position));}
    .to-green-600{--un-to-opacity:100%;--un-gradient-to:color-mix(in oklab, var(--color-green-600) var(--un-to-opacity), transparent);--un-gradient-stops:var(--un-gradient-via-stops, var(--un-gradient-position), var(--un-gradient-from) var(--un-gradient-from-position), var(--un-gradient-to) var(--un-gradient-to-position));}
    .to-green-600\\/60{--un-to-opacity:60%;--un-gradient-to:color-mix(in oklab, var(--color-green-600) var(--un-to-opacity), transparent);--un-gradient-stops:var(--un-gradient-via-stops, var(--un-gradient-position), var(--un-gradient-from) var(--un-gradient-from-position), var(--un-gradient-to) var(--un-gradient-to-position));}
    .to-transparent{--un-gradient-to:transparent;--un-gradient-stops:var(--un-gradient-via-stops, var(--un-gradient-position), var(--un-gradient-from) var(--un-gradient-from-position), var(--un-gradient-to) var(--un-gradient-to-position));}
    .via-current{--un-gradient-via:currentColor;--un-gradient-via-stops:var(--un-gradient-position), var(--un-gradient-from) var(--un-gradient-from-position), var(--un-gradient-via) var(--un-gradient-via-position), var(--un-gradient-to) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-via-stops);}
    .via-green-600{--un-via-opacity:100%;--un-gradient-via:color-mix(in oklab, var(--color-green-600) var(--un-via-opacity), transparent);--un-gradient-via-stops:var(--un-gradient-position), var(--un-gradient-from) var(--un-gradient-from-position), var(--un-gradient-via) var(--un-gradient-via-position), var(--un-gradient-to) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-via-stops);}
    .via-green-600\\/40{--un-via-opacity:40%;--un-gradient-via:color-mix(in oklab, var(--color-green-600) var(--un-via-opacity), transparent);--un-gradient-via-stops:var(--un-gradient-position), var(--un-gradient-from) var(--un-gradient-from-position), var(--un-gradient-via) var(--un-gradient-via-position), var(--un-gradient-to) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-via-stops);}
    .via-transparent{--un-gradient-via:transparent;--un-gradient-via-stops:var(--un-gradient-position), var(--un-gradient-from) var(--un-gradient-from-position), var(--un-gradient-via) var(--un-gradient-via-position), var(--un-gradient-to) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-via-stops);}
    .via-opacity-40{--un-via-opacity:40%;}
    .bg-linear-to-t{--un-gradient-position:to top in oklab;background-image:linear-gradient(var(--un-gradient-stops));}
    .bg-linear-to-tl{--un-gradient-position:to top left in oklab;background-image:linear-gradient(var(--un-gradient-stops));}"
  `)
})
