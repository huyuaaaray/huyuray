// import { siteConfig } from './lib/site-config'

// export default siteConfig({
//   // the site's root Notion page (required)
//   rootNotionPageId: '7875426197cf461698809def95960ebf',

//   // if you want to restrict pages to a single notion workspace (optional)
//   // (this should be a Notion ID; see the docs for how to extract this)
//   rootNotionSpaceId: null,

//   // basic site info (required)
//   name: 'Next.js Notion Starter Kit',
//   domain: 'nextjs-notion-starter-kit.transitivebullsh.it',
//   author: 'Travis Fischer',

//   // open graph metadata (optional)
//   description: 'Example Next.js Notion Starter Kit Site',

//   // social usernames (optional)
//   twitter: 'transitive_bs',
//   github: 'transitive-bullshit',
//   linkedin: 'fisch2',
//   // mastodon: '#', // optional mastodon profile URL, provides link verification
//   // newsletter: '#', // optional newsletter URL
//   // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

//   // default notion icon and cover images for site-wide consistency (optional)
//   // page-specific values will override these site-wide defaults
//   defaultPageIcon: null,
//   defaultPageCover: null,
//   defaultPageCoverPosition: 0.5,

//   // whether or not to enable support for LQIP preview images (optional)
//   isPreviewImageSupportEnabled: true,

//   // whether or not redis is enabled for caching generated preview images (optional)
//   // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
//   // environment variables. see the readme for more info
//   isRedisEnabled: false,

//   // map of notion page IDs to URL paths (optional)
//   // any pages defined here will override their default URL paths
//   // example:
//   //
//   // pageUrlOverrides: {
//   //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
//   //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
//   // }
//   pageUrlOverrides: null,

//   // whether to use the default notion navigation style or a custom one with links to
//   // important pages
//   navigationStyle: 'default'
//   // navigationStyle: 'custom',
//   // navigationLinks: [
//   //   {
//   //     title: 'About',
//   //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
//   //   },
//   //   {
//   //     title: 'Contact',
//   //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
//   //   }
//   // ]
// })
import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'c9e9555aaf184ab48ff5312ba4b8a35d',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'powered by Next.js Notion Starter Kit',
  domain: null,
  author: 'Yu Hu',

  // open graph metadata (optional)
  description: 'Hello World! 👋',

  // social usernames (optional)
  twitter: null,
  github: 'huyuaaaray',
  linkedin: 'yu-hu-769b02261',
//   <a href="mailto:yu.hu@ufl.edu">邮箱</a>
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
//   navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '957188d4275f40678f3a55210827384e'
    },
    {
      title: 'Resume',
      pageId: 'c7ec8a97edc64685a6c84335c22c5a77'
    },
    {
      title: 'Contact',
      pageId: '4b35f0ca0ae141b08e80ec515f7c430c'
    }
  ]
})
