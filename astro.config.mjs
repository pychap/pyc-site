import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://py-chapman.netlify.app/",
  integrations: [tailwind(), icon()]
});