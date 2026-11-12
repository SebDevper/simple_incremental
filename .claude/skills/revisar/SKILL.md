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

Que el usuario inicie `/revisar` ya es su aprobación: los pasos 3 y 4 se hacen sin pedir confirmación.

## 3. Commit
Haz `git add` solo de los archivos del cambio (nunca archivos ignorados ni ajenos al cambio) y el commit, con un mensaje que lo resuma.

## 4. PR a main
1. Haz `git push -u origin dev`.
2. Si ya hay un PR abierto de dev a main (`gh pr list --head dev --base main --state open`), no crees otro: el push ya lo actualizó.
3. Si no lo hay, crea uno con `gh pr create --base main --head dev`, con título y descripción que resuman el cambio y la verificación.

Al terminar, informa al usuario del commit y del enlace del PR.

Anota en el registro el commit y el enlace del PR.
