# Simple Incremental

Juego incremental para el navegador, pensado para llegar a números muy grandes consumiendo poca memoria.

**Jugar:** https://sebdevper.github.io/simple_incremental/

## Stack

- [Svelte 5](https://svelte.dev) + [Vite](https://vite.dev) + TypeScript, sin SvelteKit
- Pruebas con [Vitest](https://vitest.dev), jsdom y Testing Library
- Despliegue en GitHub Pages con GitHub Actions

Los motivos de cada elección están en [`docs/decisiones.md`](docs/decisiones.md).

## Requisitos

- Node.js 22.22.2+, 24.15+ o 26+ (lo que piden las dependencias, ver `engines` en `package.json`). El proyecto usa Node 26 (ver `.nvmrc`); con nvm basta con `nvm use`.

## Uso

```bash
npm install       # instalar dependencias
npm run dev       # servidor local en http://localhost:5173
npm run check     # comprobación de tipos
npm test          # pruebas
npm run build     # build de producción en dist/
npm run preview   # servir el build en http://localhost:4173/simple_incremental/
```

## Estructura

```
src/                  código del juego (App.svelte, main.ts) y sus pruebas (App.test.ts)
docs/decisiones.md    registro de decisiones del proyecto
scripts/diff-size.sh  mide las líneas cambiadas respecto a main
.claude/              agentes y skills del flujo de trabajo (/revisar, /codificar)
.github/workflows/    despliegue en GitHub Pages
```

## Flujo de trabajo

1. Se desarrolla en la rama `dev`.
2. El responsable inicia el flujo con `/revisar` en Claude Code:
   - **revisor**: revisa los cambios. Si hay comentarios bloqueantes, se corrigen y se vuelve a revisar. Las sugerencias no bloquean. Hay 5 intentos como máximo; si se agotan, el flujo se detiene y pide instrucciones.
   - **tester**: ejecuta `check`, `test` y `build`.
   - **Commit** y **PR de `dev` a `main`**, cada uno con aprobación explícita.
3. Al hacer merge en `main`, GitHub Actions vuelve a comprobar y despliega en GitHub Pages.

El agente **codificador** desarrolla tareas cuando se le pide con `/codificar <tarea>`, y después sigue el mismo flujo.

Los agentes dejan constancia de su trabajo en `.agent-log/`, que no se versiona.

Cada commit o PR debe tener menos de 300 líneas cambiadas (sin contar `package-lock.json`), para que se pueda revisar a mano. Se mide con `./scripts/diff-size.sh`.
