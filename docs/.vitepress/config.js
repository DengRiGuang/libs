const base = process.env.NODE_ENV === 'production' ? '/libs' : '';
const { resolve } = require('path');

module.exports = {
  title: 'libs',
  description: '工具包',
  // 扫描lib Includes里面的 *.md文件
  srcIncludes: ['lib'],
  alias: {
    // 为了能在demo中正确的使用  import { X } from 'libs'
    [`libs`]: resolve('./lib'),
  },
  base,
  themeConfig: {
    // logo: '../logo.svg',
    nav: [{ text: 'demo', link: '/math' }],
    lang: 'zh-CN',
    locales: {
      '/': {
        lang: 'zh-CN',
        title: 'libs',
        description: '工具包',
        label: '中文',
        selectText: '语言',
        nav: [{ text: '指南', link: '/' }],
        sidebar: [
          { text: '介绍', link: '/' },
          { text: 'Button', link: '/components/button/' },
        ],
      },
      '/en/': {
        lang: 'en-US',
        title: 'libs',
        description: '工具包',
        label: 'English',
        selectText: 'Languages',
        nav: [{ text: 'Guide', link: '/' }],
        sidebar: [
          { text: 'Getting Started', link: '/en/' },
          { text: 'Button', link: '/en/components/button/' },
        ],
      },
    },
    search: {
      searchMaxSuggestions: 10,
    },
    repo: '1971167057@qq.com/libs',
    repoLabel: 'Github',
    lastUpdated: true,
    prevLink: true,
    nextLink: true,
  },
};
