import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

import netlify from "@astrojs/netlify";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: "https://py-chapman.netlify.app/",
  integrations: [tailwind(), icon(), sitemap(), mdx()],
  output: "hybrid",
  adapter: netlify()
});