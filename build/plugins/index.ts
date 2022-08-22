
import type { PluginOption } from 'vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'
import Unocss from 'unocss/vite'
import react from '@vitejs/plugin-react'

export function createVitePlugins() {
  // 插件参数
  const vitePlugins: (PluginOption[])[] = [
    react(),
    Unocss({
      presets: [
        presetUno(), 
        presetAttributify(), 
        presetIcons()
      ],
    }),
  ]

  return vitePlugins
}