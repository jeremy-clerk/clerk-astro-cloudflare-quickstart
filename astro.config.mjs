import { defineConfig } from "astro/config";
import clerk from "@clerk/astro";
import {dark} from "@clerk/themes"
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [clerk({
    appearance: {
      baseTheme: dark
    }
  }), react()],
  vite: {
    plugins: [tailwindcss()]
  },
  output: "server",
  adapter: cloudflare(),
});