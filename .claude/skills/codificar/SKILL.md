---
name: codificar
description: Lanza el agente de desarrollo secundario con una tarea y, al terminar, el flujo de revisión.
disable-model-invocation: true
argument-hint: <tarea>
---

Tarea: $ARGUMENTS

1. Confirma que estás en la rama `dev`. Si no, detente y avisa.
2. Crea el registro `.agent-log/AAAA-MM-DD-HHMM.md` con el título y la tarea.
3. Lanza el agente `codificador` con la tarea y la ruta del registro.
4. Al terminar, sigue el flujo de `/revisar` (`.claude/skills/revisar/SKILL.md`) desde el paso 1, con el mismo registro.
