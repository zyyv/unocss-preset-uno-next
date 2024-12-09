import { defineConfig, presetUno } from 'unocss'
import { presetStarter } from './packages/preset-wind-v4/src'

// Just for Vscode Extension

export default defineConfig({
  presets: [
    presetUno(),
    presetStarter({
      span: 24,
    }),
  ],
})
