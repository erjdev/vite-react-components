/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path, { resolve } from 'path'
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['lib'],
      tsconfigPath: 'tsconfig.lib.json',
      rollupTypes: true,
    }),
    libInjectCss(),
  ],
  server: {
    port: 3000,
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: {
        index: resolve(__dirname, 'lib/index.ts'),
        button: resolve(__dirname, 'lib/components/Button/index.tsx'),
        input: resolve(__dirname, 'lib/components/Input/index.tsx'),
        label: resolve(__dirname, 'lib/components/Label/index.tsx'),
      },
      formats: ['es'],
      name: 'ViteReactComponents',
      fileName: (format) => `vrc.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom'],
      output: {
        // Put chunk files at <output>/chunks
        chunkFileNames: 'chunks/[name].[hash].js',
        // Put chunk styles at <output>/assets
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
        // Register externals/globals
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "JSXRuntime",
        },
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    include: ['./vitest/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
