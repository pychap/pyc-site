import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import purgecss from "astro-purgecss";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: "https://py-chapman.netlify.app/",
  integrations: [tailwind(), icon(), purgecss(), sitemap()]
});