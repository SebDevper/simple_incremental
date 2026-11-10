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
