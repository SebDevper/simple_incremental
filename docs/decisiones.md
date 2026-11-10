# Registro de decisiones

Decisiones del proyecto, con su contexto, para consultarlas más adelante.
Cada una lleva fecha y estado (vigente | reemplazada).

## 001 — Svelte + Vite, sin SvelteKit
**Fecha:** 2026-11-10 · **Estado:** vigente

**Decisión:** el proyecto usa Svelte 5 + Vite como aplicación de una sola página, sin SvelteKit. No se generó con `npx sv create` (que crea un proyecto SvelteKit): se instalaron las dependencias y se escribió la configuración a mano.

**Motivos:**
- Un incremental es una sola pantalla que corre en el navegador, así que no necesita rutas ni renderizado en servidor.
- Menos runtime y menos archivos, en línea con el objetivo de consumir poca memoria.
- Configuración mínima, que ayuda a mantener los PR por debajo de 300 líneas.

**Revisar si:** el juego necesita varias páginas con URL propia. En ese caso, valorar migrar a SvelteKit con `adapter-static`.

## 002 — Despliegue en GitHub Pages con GitHub Actions
**Fecha:** 2026-11-10 · **Estado:** vigente

**Decisión:** cada push a `main` (es decir, cada merge de un PR) lanza `.github/workflows/deploy.yml`. El workflow ejecuta `check`, `test` y `build`, y publica `dist/` en GitHub Pages. Si algo falla, no se despliega.

**Detalles:**
- URL: https://sebdevper.github.io/simple_incremental/
- En el build y en `npm run preview`, Vite usa `base: '/simple_incremental/'`, porque Pages sirve el repo en esa subcarpeta (preview: http://localhost:4173/simple_incremental/). Con `npm run dev` y en los tests se sigue sirviendo en la raíz.
- En Settings → Pages, la fuente debe ser "GitHub Actions".

**Revisar si:** se usa un dominio propio. En ese caso, `base` vuelve a ser `/`.
