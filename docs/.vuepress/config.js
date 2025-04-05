import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  title:'mahoyo',
  base:'/mahoyo',
  lang: 'zh-CN',
  theme: plumeTheme({
    // more...
  }),
  bundler: viteBundler(),
})