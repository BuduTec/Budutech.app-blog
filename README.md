
# BuduTech Next Migration

Main site: https://budutech.app  
Blog subdomain: https://blog.budutech.app

## Included
- Main site
- Services pages
- Blog pages
- Search
- Category pages
- Google-style reviews section
- SEO, GEO and AEO structure
- robots.txt, sitemap.xml, llms.txt and rss.xml
- Middleware for the blog subdomain

## Not included yet
- Free tools

## Subdomain setup
Add `blog.budutech.app` to the same Vercel project. The middleware rewrites blog subdomain requests to the `/blog` routes.

## Install
```bash
npm install
npm run dev
```

## Deploy
Push to GitHub, connect to Vercel, then add:
- `budutech.app`
- `blog.budutech.app`
