import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://quant-dot-ai.github.io/arkade/",
  base: "/arkade/",
  integrations: [tailwind(), mdx(), sitemap()],
});
