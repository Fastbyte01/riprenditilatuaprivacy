/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Riprenditi la tua privacy',
  tagline: 'Scopri come riprenderti la tua privacy online',
  url: 'https://www.riprenditilatuaprivacy.online',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'fastbyte01', // Usually your GitHub org/user name.
  projectName: 'riprenditilatuaprivacy', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Riprenditi la tua privacy',
      logo: {
        alt: 'Riprenditilatuaprivacy logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Guide',
        },
        {to: '/docs/strumenti/intro', label: 'Strumenti', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guide',
          items: [
            {
              label: 'Guide',
              to: '/docs/intro',
            },
            {
              label: 'Strumenti',
              to: '/docs/strumenti/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Fastbyte01/riprenditilatuaprivacy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
