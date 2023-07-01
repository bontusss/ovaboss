// / <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite'
import { posix, resolve } from 'path'
import mpaPlugin from 'vite-plugin-mpa-plus'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default (config) => {
  const env = { ...process.env, ...loadEnv(config.mode, process.cwd()) }

  const app = env.VITE_APP_NAMES.split(',')
  const extensions = env.VITE_APP_EXTENSIONS.split(',')

  const rewrites = []

  const pages = app.reduce((_pages, pageName, currentIndex) => {
    _pages[pageName] = {
      entry: `packages/${pageName}/src/main.${extensions[currentIndex]}`,
      filename: `/${pageName}.html`,
      template: `packages/${pageName}/index.html`,
      inject: {
        data: {
          title: `mpa-${pageName}`
        }
      }
    }
    rewrites.push({
      from: `/${pageName}`,
      to: posix.join('/', `/packages/${pageName}/index.html`)
    })
    console.log(rewrites)

    return _pages
  }, {})

  // const pages = {
  //   main: {
  //     entry: 'packages/main/src/main.js',
  //     filename: '/main.html',
  //     template: 'index.html',
  //     inject: { data: { title: 'mpa-main' } }
  //     // rewrites: rewrites.push({ from: '/main', to: posix.join('/', '/index.html') })
  //   },
  //   dashboard: {
  //     entry: 'packages/dashboard/src/main.js',
  //     filename: '/dashboard.html',
  //     template: 'packages/dashboard/index.html',
  //     inject: { data: { title: 'mpa-dashboard' } },
  //     rewrites: rewrites.push({
  //       from: '/dashboard',
  //       to: posix.join('/', 'packages/dashboard/index.html')
  //     })
  //   }
  // }

  return defineConfig({
    plugins: [
      vue(),
      mpaPlugin({
        pages,
        historyApiFallback: {
          rewrites
        }
      })
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './packages')
      }
    }
  })
}
