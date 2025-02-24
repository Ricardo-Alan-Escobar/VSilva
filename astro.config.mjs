// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // Importa el complemento de Tailwind CSS
import icon from "astro-icon";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),

  integrations: [icon()],
  vite: {
    
    plugins: [tailwindcss()],
  },
});
