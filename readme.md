### TODO
1. Add switching between local/remote apis
1. Css modules - variable and global stuffs
1. Create sitemap.xml and register that with google https://www.youtube.com/watch?v=xtoAfUB6Ubw
1. Read up on critical rendering path on [udacity](https://classroom.udacity.com/courses/ud860)
1. [keep alive](https://varvy.com/pagespeed/keep-alive.html)
1. Rendering performance [reflow](https://developers.google.com/speed/docs/insights/browser-reflow)

### Cool stuffs
1. css modules using `react-css-modules`. By using css module we can also hash the css names
1. Meta for discovery using Open Graph protocol (meta tag with og scheme)
1. Code and CSS splitting
1. Getting react library via CDN helps in minimising bundle size. Set `react` and `react-dom` as `externals` in webpack config
1. [Webpack path alias](https://medium.com/@etherealm/getting-rid-of-relative-paths-in-imports-using-webpack-alias-78d4bf15bb42) and [additional configuration for Typescript](https://stackoverflow.com/questions/40443806/webpack-resolve-alias-does-not-work-with-typescript)
1. [Pre-rendering using puppeteer](https://developers.google.com/web/tools/puppeteer/articles/ssr)
   - There are additional steps that have to be wired together:
      1. Start application after bundling
      1. pre-render pages
      1. Add them to dist folder
1. Isomorphic rendering is achieved for production
   1. When building for production, `prerender-xs` is used to generate `index.html` for all routes
   1. Pre-rendered contents of `dist` folder will be served by `express` located in `test-server` folder or simply by running `npm run deploy:prod`
   1. _Note that this is isomorphic rendering which means that after an `index.html` is served for a particular route any other `react-router` navigation using `<Link>` component remains as `client-side-routing`_
1. Mock api is configured in webpack.dev.ts using `connect-api-mocker` package

### SEO
1. Sitemap.xml can be added to [robot.txt](https://neilpatel.com/blog/robots-txt/)
1. How to SEO
   - [hashbang](https://www.oho.com/blog/explained-60-seconds-hash-symbols-urls-and-seo) (Deprecated)
   - [SSR vs pre-render with multiple library/frameoworks](https://snipcart.com/spa-seo)

### Optimization

### Resource
1. [Excellent SPA SEO article #1](https://snipcart.com/spa-seo)
