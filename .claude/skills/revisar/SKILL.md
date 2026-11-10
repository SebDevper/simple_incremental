---
name: revisar
description: Flujo revisión → testing → commit → PR a main para los cambios de la rama dev.
disable-model-invocation: true
---

Flujo que inicia el usuario. Sigue los pasos en orden.

## 0. Preparación
- Confirma que estás en la rama `dev`. Si no, detente y avisa.
- Si viene de `/codificar`, usa el registro que ya existe. Si no, crea `.agent-log/AAAA-MM-DD-HHMM.md` con un título y un resumen de los cambios.

## 1. Revisión (máximo 5 intentos)
Para N = 1..5:
1. Lanza el agente `revisor` con la ruta del registro y el número N.
2. Si el estado es APROBADO, pasa al paso 2.
3. Si el estado es CAMBIOS, muestra los comentarios al usuario y corrígelos. Si el cambio vino de `/codificar`, lanza `codificador` para que los corrija. Después, vuelve a revisar.

Si después del intento 5 sigue en CAMBIOS, detente. Deja en el registro una sección `## Bloqueado` y pide instrucciones al usuario.

## 2. Testing
Lanza el agente `tester` con la ruta del registro.
- Si el estado es FALLA, muestra los comentarios al usuario y detente a la espera de instrucciones.
- Si el estado es OK, pasa al paso 3.

## 3. Commit (requiere permiso)
Propón un mensaje de commit y pide permiso al usuario. Solo con un sí: haz `git add` de los archivos del cambio y el commit.

## 4. PR a main (requiere permiso)
Propón título y descripción del PR y pide permiso. Solo con un sí: haz `git push -u origin dev` y `gh pr create --base main --head dev`.

Anota en el registro el commit y el enlace del PR.
