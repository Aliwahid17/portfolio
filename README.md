# Personal Portfolio

Hey, I'm Wahid Ali works as FullStack Web Devoloper. I created my portfolio website in [sveltekit](https://kit.svelte.dev/), [tailwind](https://tailwindcss.com/) and used markdown for writing blogs.

## Creating your Own Portfolio + Blog Site

If you like my website you can freely use my webiste for your projects.
```
git clone https://github.com/Aliwahid17/portfolio.git
cd portfolio
pnpm install # you can use any package manager
pnpm dev 
```

## Contribute in my Portfolio + Blog Site

If you find any error and know see some scope of improvements in my projects.Please fork the repo or create an issue.

## What's inside?

```
.
|-- src
|    |-- lib
|    |    |-- assets
|    |    |     |-- about
|    |    |     |     └── (contains about page Images)
|    |    |     |-- content
|    |    |     |     └── (contains blogPost Images according to Name)
|    |    |     └── (contains homepage Images)
|    |    |-- components
|    |    |     |-- content
|    |    |     |     └── (contains blog page components)
|    |    |     |-- SEO
|    |    |     |     └── (contains meta tags components)
|    |    |     └── (contains common components)
|    |    └── content
|    |    |      └── (contains blogPost markdown)
|    |    └── (contains Typescript logic)
|    |-- routes
|    |    |-- about
|    |    |     |── +page.svelte
|    |    |     └── +page.ts
|    |    |-- blogs
|    |    |     |── [slug]
|    |    |     |      |── +page.svelte
|    |    |     |      └── +page.ts     
|    |    |     |── +page.svelte
|    |    |     └── +page.ts
|    |    |-- projects
|    |    |     |── +page.svelte
|    |    |     └── +page.ts
|    |    |-- sitemap.xml
|    |    |     └── +server.ts
|    |    |-- tags
|    |    |     |── [slug]
|    |    |     |      |── +page.svelte
|    |    |     |      └── +page.ts     
|    |    |     |── +page.svelte
|    |    |     └── +page.ts
|    |    |-- +error.svelte
|    |    |-- +layout.svelte
|    |    └── +page.svelte
|    |-- app.css
|    |-- app.d.ts
|    |-- app.html
|    └── hooks.server.ts
|-- static
|    |-- favicon.ico
|    |-- icon.svg
|    |-- manifest.json
|    └── robots.txt
|-- .eslintignore
|-- .eslintrc.cjs
|-- .gitignore
|-- .npmrc
|-- mdsvex.config.js
|-- package.json
|-- pnpm-lock.yaml
|-- postcss.config.cjs
|-- README.md
|-- svelte.config.js
|-- tailwind.config.js
|-- tsconfig.json
└── vite.config.js
```
