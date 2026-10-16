# Conceptos Básicos de Desarrollo Web

Glosario interactivo con **200 conceptos** de desarrollo web explicados con
ejemplos reales y analogías cotidianas. Proyecto académico para los
compañeros de la ficha **3534665** — Técnico en Programación de Software,
Jornada Noche (SENA).

## Cómo correr el proyecto

Requisitos: [Node.js](https://nodejs.org/) 20+ y [pnpm](https://pnpm.io/).

```bash
pnpm install   # instalar dependencias
pnpm dev       # servidor de desarrollo (Vite)
pnpm build     # typecheck (tsc -b) + build de producción
pnpm lint      # ESLint sobre todo el repo
```

Luego abre la URL que imprime `pnpm dev` en el navegador.

## Estructura de carpetas

```
src/
├── components/
│   ├── ui/           # Primitivos shadcn/ui (no editar a mano)
│   ├── layout/       # RootLayout, Header, Footer, Breadcrumbs, etc.
│   ├── conceptos/    # Tarjeta, bloques de código y acciones de concepto
│   ├── nivel/        # Tarjeta, sidebar y encabezado de nivel
│   ├── search/       # Buscador global (Cmd+K / Ctrl+K)
│   └── shared/       # Transiciones, contadores, efectos magnéticos, etc.
├── hooks/            # useProgress, useDocumentTitle, useKeyboardShortcut
├── lib/              # motion-variants, shiki (singleton), seo, utils
├── pages/            # Home, NivelPage, ConceptoPage, NotFound
├── data/
│   ├── db-types.ts   # Interfaces Nivel, Concepto y BloqueContenido
│   ├── database.ts   # 10 niveles + 200 conceptos + helpers de consulta
│   └── glosary.md    # Fuente original del contenido (Markdown)
├── App.tsx           # Router principal (createBrowserRouter)
├── main.tsx          # Entry point
└── index.css         # Tailwind v4 + tokens del tema
```

## Cómo agregar un nuevo concepto

1. Abre `src/data/database.ts`.
2. Agrega un objeto al array `conceptos` siguiendo la interface
   `Concepto` de `src/data/db-types.ts`:

   - `id`: número único global consecutivo.
   - `slug`: kebab-case único (se usa en la URL `/concepto/{slug}`).
   - `nivelId`: id del nivel al que pertenece (1-10).
   - `orden`: posición dentro de su nivel.
   - `titulo`, `definicion`, `ejemplo` (bloques de texto/código) y
     `analogia`: en texto plano y en español.
   - `tags`: 3-5 etiquetas kebab-case para el buscador.

3. Guarda. El concepto aparece en su nivel, en el buscador (Cmd+K) y en
   la navegación anterior/siguiente automáticamente. No hay pasos extra:
   no hay build de datos ni migraciones.

## Créditos

- **Autor**: JEBC-DeV — desarrollado con fines académicos para mis
  compañeros de ficha.
- **Ficha**: 3534665 · Técnico en Programación de Software · Jornada
  Noche — Servicio Nacional de Aprendizaje (SENA).
- **Contenido**: 200 conceptos transcritos de `src/data/glosary.md`.

### Stack

- [Vite](https://vite.dev/) + [React 19](https://react.dev/) +
  [TypeScript](https://www.typescriptlang.org/)
- [React Router v8](https://reactrouter.com/) (modo data)
- [Tailwind CSS v4](https://tailwindcss.com/) +
  [shadcn/ui](https://ui.shadcn.com/) (Base UI)
- [Motion](https://motion.dev/) para animaciones
- [Shiki](https://shiki.style/) para resaltado de sintaxis
- [cmdk](https://cmdk.paco.me/) para el buscador global
