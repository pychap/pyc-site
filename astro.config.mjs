import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import purgecss from "astro-purgecss";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: "https://py-chapman.netlify.app/",
  integrations: [tailwind(), icon(), purgecss(), sitemap()],
  output: "hybrid",
  adapter: netlify()
});