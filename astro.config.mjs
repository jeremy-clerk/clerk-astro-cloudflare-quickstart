import { defineConfig } from "astro/config";
import clerk from "@clerk/astro";
import {dark} from "@clerk/themes"
import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [clerk({
    appearance: {
      baseTheme: dark
    }
  }), tailwind(), react()],
  output: "server",
  adapter: cloudflare(),
});