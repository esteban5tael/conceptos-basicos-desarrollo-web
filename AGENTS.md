# AGENTS.md

Sitio de exposición (SENA) con un glosario interactivo de 200 conceptos básicos
de desarrollo web, en español, agrupados en 10 niveles temáticos. Todo el
contenido, JSDoc y commits van en español.

## Comandos

- `pnpm dev` — servidor de desarrollo Vite.
- `pnpm lint` — ESLint sobre todo el repo.
- `pnpm build` — `tsc -b && vite build` (typecheck + build; no hay script de
  typecheck separado).
- No existen tests ni CI. Verificación mínima antes de entregar: `pnpm lint && pnpm build`.
- **pnpm** es el único gestor de paquetes permitido (regla del AGENTS.md global).

## Stack y quirks verificados

- Vite 8 + React 19 + TypeScript ~6. Alias `@` → `src/` (en `vite.config.ts` y
  `tsconfig.app.json` — mantener ambos sincronizados).
- React Compiler activo vía `@rolldown/plugin-babel` + `reactCompilerPreset()`
  en `vite.config.ts`. Es esperado que dev/build sean más lentos.
- Tailwind 4 **CSS-first**: no hay `tailwind.config`. Los tokens del tema viven
  en `src/index.css` (`@theme inline` + variables CSS con light/dark).
- shadcn/ui configurado en `components.json` con style `base-nova`: los
  primitivos son **Base UI** (`@base-ui/react`), NO Radix; iconos con
  `@remixicon/react`. `cn` re-exporta el paquete npm `cn` desde
  `src/lib/utils.ts` — no reimplementar clsx + tailwind-merge ahí.
- tsconfig estricto con dos trampas:
  - `erasableSyntaxOnly: true` → **prohibidos los enums de TS**; usar uniones
    de literales.
  - `verbatimModuleSyntax: true` → los tipos se importan con `import type`.
- `react-router` está instalado pero aún no está cableado en `main.tsx`.

## Datos del glosario (dominio principal)

- `src/data/glosary.md` — fuente de contenido con los 200 conceptos
  (el nombre del archivo tiene typo: "glosary"; no renombrar sin pedirlo).
- `src/data/db-types.ts` — tipos `Nivel`, `Concepto`, `BloqueContenido`
  (todos los campos `readonly`).
- `src/data/database.ts` — transcripción a TS: los 10 niveles y los 200
  conceptos están completos, transcritos palabra por palabra desde
  `glosary.md` (definiciones, ejemplos y analogías). El código embebido vive
  en bloques `{ tipo: "codigo", lenguaje }` dentro de `ejemplo`.
- Al final de `database.ts` hay helpers de consulta
  (`getConceptoBySlug`, `getConceptoById`, `getConceptosByNivel`,
  `getNivelBySlug`, `buscarConceptos`) — usarlos en vez de filtrar arrays
  inline en componentes.
- Nota: `src/data/*.ts` y `public/logo.webp` pueden estar sin commitear.

## Estado actual

- `src/App.tsx` sigue siendo el boilerplate de la plantilla Vite; la UI real del
  glosario aún no existe. Al construirla, seguir la estructura `src/features/`
  que exige el AGENTS.md global (`~/.config/opencode/AGENTS.md`), que además
  manda pnpm, JSDoc en español, Zod en fronteras y commits convencionales en
  español.
