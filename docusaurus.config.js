/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'Bitgrin',
  tagline: 'All the Bitgrin Docs and Guides in one place',
  url: 'https://docs.bitgrin.dev',
  baseUrl: '/',
  favicon: 'img/Logo.png',
  organizationName: 'Bitgrin', // Usually your GitHub org/user name.
  projectName: 'Bitgrin', // Usually your repo name.
  themes: ['@docusaurus/theme-live-codeblock'],
  themeConfig: {
    navbar: {
      title: 'Bitgrin Documentation',
      logo: {
        alt: 'My Site Logo',
        src: 'img/Logo.png',
      },
      links: [
        {to: 'docs/doc1', label: 'Docs', position: 'left'},
        {href: 'https://bitgrin.dev', label: 'Website', position: 'left'},
		{
          href: 'https://github.com/Bitgrin',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: 'docs/doc1',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/UWxay3c',
            },
          ],
        },
        {
          title: 'Social',
          items: [
           /// {
           ///   label: 'Blog',
           ///   to: 'blog',
           /// },
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'https://docusaurus.io/img/oss_logo.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
