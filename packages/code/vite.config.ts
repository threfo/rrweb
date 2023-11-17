import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

import { name as packageName } from './package.json'

export default defineConfig({
  define: {
    'import.meta.vitest': 'undefined',
  },
  build: {
    lib: {
      formats: ['es', 'cjs', 'umd'],
      entry: resolve(__dirname, 'src/index.ts'),
      name: packageName,
      fileName: 'index',
    },
    emptyOutDir: true,
  },
  plugins: [dts()],
})
