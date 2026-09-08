# T3 Code en español (fork)

Fork de [pingdotgg/t3code](https://github.com/pingdotgg/t3code) con la interfaz en español. No cambia nada más.

## Cómo funciona

- La rama `spanish` es el fork. `main` es un espejo del oficial.
- Cada día, `.github/workflows/sync-upstream.yml` rebasa `spanish` sobre el `main` oficial. Si hay conflictos, abre un issue con la etiqueta `sync-conflict` y no toca nada.
- Cuando el oficial publica una versión estable nueva, el mismo workflow lanza `.github/workflows/release-es.yml`, que compila macOS (arm64 y x64) y Linux y publica una release en este fork con el mismo número de versión.
- La app de escritorio compilada desde aquí busca actualizaciones en las releases de este fork, no en las oficiales.

## Cómo está hecha la traducción

- `apps/web/src/i18n/t.ts`: la función `t("texto en inglés")`. La clave es el propio texto en inglés; si falta en el catálogo se muestra en inglés.
- `apps/web/src/i18n/es.ts`: el catálogo. Es el único archivo que hay que tocar para traducir más.
- `apps/web/src/i18n/es.test.ts` falla si una clave del catálogo ya no existe en el código (el oficial cambió el texto). Ejecutar tras cada sincronización: `vp test run apps/web/src/i18n`.
- El idioma se elige en Ajustes → General → Idioma y se guarda en el navegador o la app (`localStorage`), sin tocar el servidor.

## Resolver un conflicto de sincronización

```bash
git fetch upstream main
git checkout spanish
git rebase upstream/main
# resolver, git add, git rebase --continue
vp test run apps/web/src/i18n
git push --force-with-lease origin spanish
```

Tras un rebase automático, actualiza tu copia local con `git pull --rebase origin spanish`.

## Limitaciones

- Las builds no están firmadas. En macOS, la primera vez hay que permitir la app en Ajustes del Sistema → Privacidad y seguridad, y la actualización automática no puede instalarse sola: la app avisa de la versión nueva y hay que descargar el DMG.
- Sin Windows por ahora. Sin T3 Connect (requiere claves del relay oficial).
- Solo está traducida la app web y de escritorio, no la app móvil.
