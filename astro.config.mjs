// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // Importa el complemento de Tailwind CSS
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  vite: {
    
    plugins: [tailwindcss()],
  },
});
