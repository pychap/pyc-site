import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: "https://py-chapman.netlify.app/",
  integrations: [tailwind(), icon(), sitemap()],
  output: "hybrid",
  adapter: netlify()
});