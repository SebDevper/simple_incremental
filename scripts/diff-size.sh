#!/usr/bin/env bash
# Cuenta las líneas cambiadas respecto a una rama base (por defecto: main).
# Incluye cambios sin commit y archivos nuevos sin seguimiento.
# Excluye package-lock.json (lo genera npm) y los binarios.
set -euo pipefail

base="${1:-main}"
total=0

# Suma una línea de numstat: "añadidas<TAB>borradas". Los binarios traen "-".
add_counts() {
  local added="$1" removed="$2" file="$3"
  [[ "$file" == "package-lock.json" || "$added" == "-" ]] && return 0
  total=$((total + added + removed))
}

# Archivos versionados. Con -z, los nombres con tildes llegan sin escapar.
while IFS=$'\t' read -r -d '' added removed file; do
  add_counts "$added" "$removed" "$file"
done < <(git diff "$base" --numstat --no-renames -z)

# Archivos nuevos: se comparan contra /dev/null para medirlos igual que git diff.
while IFS= read -r -d '' file; do
  read -r added removed _ < <(git diff --no-index --numstat /dev/null "$file" || true)
  add_counts "$added" "$removed" "$file"
done < <(git ls-files --others --exclude-standard -z)

echo "$total"
