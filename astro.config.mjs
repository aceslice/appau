// @ts-check
import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    UnoCSS({
      injectReset: true,
    }),
  ],
});
