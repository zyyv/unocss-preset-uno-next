# unocss-preset-starter [![npm](https://img.shields.io/npm/v/unocss-preset-starter)](https://npmjs.com/package/unocss-preset-starter)

UnoCSS preset quickstart template.

## Features
- 🔥 Description of the preset

## Usage
```shell
pnpm i -D unocss-preset-starter unocss
```

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetStarter } from 'unocss-preset-starter'

export default defineConfig({
  presets: [
    // ...
    presetStarter(),
  ],
})
```

## License

[MIT](./LICENSE) License © 2023 [zyyv](https://github.com/zyyv)
