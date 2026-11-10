import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { svelteTesting } from '@testing-library/svelte/vite';

export default defineConfig({
  // svelteTesting solo actúa en tests: usa la versión de navegador de Svelte
  // y limpia el DOM después de cada prueba.
  plugins: [svelte(), svelteTesting()],
  test: {
    environment: 'jsdom',
  },
});
