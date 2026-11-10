# Simple Incremental

Juego incremental con Svelte 5 + TypeScript + Vite. Responde en español.

## Comandos
- `npm run dev`: servidor local
- `npm run check`: comprobación de tipos
- `npm test`: pruebas (Vitest)
- `npm run build`: build de producción

## Reglas de trabajo
- Se desarrolla en la rama `dev`. Los PR van de `dev` a `main`.
- **Pide permiso al usuario antes de cada commit y cada PR.** Sin excepciones.
- Cada commit o PR debe tener menos de 300 líneas cambiadas (sin contar `package-lock.json`). Mídelo con `./scripts/diff-size.sh`. Si no cabe, divide el cambio.
- El flujo de revisión → testing → commit → PR lo inicia el usuario con `/revisar`.
- El agente `codificador` solo se lanza cuando el usuario ejecuta `/codificar`. Nunca lo lances por iniciativa propia.
- Los agentes se comunican mediante el registro `.agent-log/` (no se versiona). Cada flujo tiene su propio archivo.
- Las decisiones del proyecto se registran en `docs/decisiones.md`. Consúltalo antes de cambiar el stack o la arquitectura.
