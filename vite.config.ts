import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { svelteTesting } from '@testing-library/svelte/vite';

export default defineConfig(({ command, isPreview }) => ({
  // En GitHub Pages el juego vive en /simple_incremental/. El build y preview usan esa
  // ruta; `npm run dev` y los tests se sirven en la raíz.
  base: command === 'build' || isPreview ? '/simple_incremental/' : '/',
  // svelteTesting solo actúa en tests: usa la versión de navegador de Svelte
  // y limpia el DOM después de cada prueba.
  plugins: [svelte(), svelteTesting()],
  test: {
    environment: 'jsdom',
  },
}));
