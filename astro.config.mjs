import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap({
    lastmod: new Date(),
  }), 
  icon()
]
});