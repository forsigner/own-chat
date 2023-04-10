import { addStrategyFooterPlugin } from 'boter-core'
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    strategy: 'src/strategy.ts',
  },
  format: ['cjs'],
  outDir: 'out',
  splitting: false,
  sourcemap: false,
  target: 'node14',
  clean: true,
  platform: 'node',
  noExternal: ['boter-core'],
  esbuildPlugins: [addStrategyFooterPlugin],
})
