import { defineConfig, presetUno } from 'unocss'
import { presetStarter } from './src'

// Just for Vscode Extension

export default defineConfig({
  presets: [
    presetUno(),
    presetStarter({
      span: 24,
    }),
  ],
})
