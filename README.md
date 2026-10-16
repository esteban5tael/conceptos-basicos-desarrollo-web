# Conceptos Básicos de Desarrollo Web

> Glosario interactivo con **200 conceptos** de desarrollo web explicados
> con definiciones claras, ejemplos de código reales y analogías
> cotidianas. Un sitio web moderno, rápido y sin backend, pensado como
> material de apoyo académico.

**Ficha 3534665 · Técnico en Programación de Software · Jornada
Noche — Servicio Nacional de Aprendizaje (SENA).**

---

## Contenido

1. [¿Qué es esto?](#¿qué-es-esto)
2. [Propósito académico](#propósito-académico)
3. [Características principales](#características-principales)
4. [Vista general del sitio](#vista-general-del-sitio)
5. [Stack tecnológico](#stack-tecnológico)
6. [Requisitos previos](#requisitos-previos)
7. [Cómo descargar y ejecutar el proyecto](#cómo-descargar-y-ejecutar-el-proyecto)
8. [Comandos disponibles](#comandos-disponibles)
9. [Rutas del sitio](#rutas-del-sitio)
10. [Atajos de teclado](#atajos-de-teclado)
11. [Estructura del proyecto](#estructura-del-proyecto)
12. [Cómo funciona el contenido (la "base de datos")](#cómo-funciona-el-contenido-la-base-de-datos)
13. [Cómo agregar un nuevo concepto](#cómo-agregar-un-nuevo-concepto)
14. [Cómo agregar un nuevo nivel](#cómo-agregar-un-nuevo-nivel)
15. [Cómo funciona el progreso de lectura](#cómo-funciona-el-progreso-de-lectura)
16. [Accesibilidad](#accesibilidad)
17. [Despliegue (publicar en internet)](#despliegue-publicar-en-internet)
18. [Preguntas frecuentes (FAQ)](#preguntas-frecuentes-faq)
19. [Aprendizajes del proyecto](#aprendizajes-del-proyecto)
20. [Créditos](#créditos)

---

## ¿Qué es esto?

Este repositorio contiene el código fuente de un **sitio web estático**
que funciona como glosario de términos de desarrollo web. No es una
aplicación con servidor ni base de datos: todo el contenido (los 200
conceptos) vive dentro del propio código TypeScript, y el sitio se
convierte en archivos HTML/CSS/JS estáticos que pueden correr en
cualquier hosting gratuito.

En resumen:

- **200 conceptos** distribuidos en **10 niveles temáticos**.
- Cada concepto tiene: **definición**, **ejemplo real** (con bloques de
  código resaltados) y una **analogía cotidiana**.
- Buscador instantáneo, progreso de lectura personal y animaciones.
- Interfaz 100% en español, tema oscuro y diseño responsive
  (funciona en celular, tablet y computador).

## Propósito académico

Este proyecto fue desarrollado con **fines exclusivamente académicos**
como material de apoyo para los compañeros de la ficha **3534665**
del programa Técnico en Programación de Software del SENA, jornada
noche.

Los objetivos pedagógicos son dobles:

1. **Para quienes usan el sitio**: tener un glosario confiable y
   consultable rápido de los conceptos vistos en formación, con
   ejemplos prácticos y analogías que facilitan recordar cada término
   antes de las evaluaciones o la exposición.
2. **Para quienes leen el código**: servir como ejemplo real de un
   proyecto Frontend moderno con React 19 + TypeScript estricto +
   Tailwind CSS v4, arquitectura de componentes limpia, y buenas
   prácticas que se pueden estudiar y replicar en otros proyectos.

> **Nota**: no es un producto comercial. Es un esfuerzo comunitario
> entre compañeros de ficha. El texto de los conceptos fue transcrito y
> adaptado de material de formación y fuentes públicas con fines de
> estudio.

## Características principales

### Contenido

- **200 conceptos** en 10 niveles, cada uno con definición, ejemplo y
  analogía.
- **Bloques de código con resaltado de sintaxis real** (Shiki, el mismo
  resaltador de VS Code) para HTML, CSS, JavaScript, SQL y más.
- **Botón "copiar código"** en cada bloque, con feedback visual.
- **Navegación anterior/siguiente** entre conceptos dentro del mismo
  nivel.
- **Tags etiquetados** en cada concepto para reforzar búsquedas.

### Búsqueda y navegación

- **Buscador global** con palette de comandos (estilo Raycast/VS Code)
  que se abre con `Cmd+K` (Mac) o `Ctrl+K` (Windows/Linux).
- Busca por **título, definición y tags**, con resultados agrupados y
  navegación por teclado.
- **Menú de niveles** en el header y menú mobile tipo "drawer".
- **Breadcrumbs** (migas de pan) para saber dónde estás.
- **Concepto aleatorio** con un solo clic desde el inicio.

### Experiencia de usuario

- **Progreso de lectura persistente**: marca conceptos como leídos y
  el sitio recuerda tu avance en `localStorage` (sin cuentas, sin
  servidor). La barra de progreso global aparece en el header y en
  cada tarjeta de nivel.
- **Sincronización entre pestañas**: si abres dos pestañas, el
  progreso se sincroniza en tiempo real vía el evento `storage`.
- **Animaciones "hyper"** con Motion: hero con palabras animadas,
  transiciones de página, contadores animados, botones magnéticos y un
  "glow" que sigue al cursor.
- **Tema oscuro permanente** con tokens de diseño (variables CSS)
  heredados de shadcn/ui.

### Técnica

- **Mobile-first y responsive**: diseñado primero para celular.
- **Accesible**: navegación por teclado, `aria-label`s, skip-link,
  y respeto total a `prefers-reduced-motion` (quien pide menos
  movimiento ve el sitio estático).
- **SEO dinámico**: título y meta descripción se actualizan en cada
  página (React Router + `setSEO`), más etiquetas Open Graph para
  compartir en redes.
- **TypeScript estricto**: sin `any`, sin enums, tipos inferidos y
  JSDoc en español en todo el código.
- **React Compiler activado**: el código se optimiza automáticamente
  (menos re-renders innecesarios).

## Vista general del sitio

| Ruta | Pantalla |
|---|---|
| `/` | Inicio: hero, estadísticas globales y grid de los 10 niveles |
| `/nivel/{slug}` | Nivel: sidebar con la lista + grid de tarjetas de concepto |
| `/concepto/{slug}` | Concepto: definición, ejemplo con código, analogía, acciones y navegación |
| cualquier otra | Página 404 amigable |

## Stack tecnológico

Cada tecnología con su versión y por qué está elegida:

| Tecnología | Versión | Para qué sirve en este proyecto |
|---|---|---|
| [Vite](https://vite.dev/) | 8.x | Bundler y servidor de desarrollo ultrarrápido |
| [React](https://react.dev/) | 19.x | Biblioteca de UI (con React Compiler activo) |
| [TypeScript](https://www.typescriptlang.org/) | ~6.0 | Tipado estático estricto |
| [React Router](https://reactrouter.com/) | 8.x | Enrutamiento del sitio (modo data router) |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Estilos utilitarios (CSS-first, sin config JS) |
| [shadcn/ui](https://ui.shadcn.com/) | style `base-nova` | Componentes base accesibles sobre [Base UI](https://base-ui.com/) |
| [Motion](https://motion.dev/) | 14.x | Animaciones y transiciones |
| [Shiki](https://shiki.style/) | 4.5 | Resaltado de sintaxis (tema GitHub Dark) |
| [cmdk](https://cmdk.paco.me/) | 1.1 | Palette de comandos del buscador (`Cmd+K`) |
| [sonner](https://sonner.emilkowal.ski/) | 2.x | Notificaciones toast |
| [Remix Icon](https://remixicon.com/) | 4.x | Iconos (`@remixicon/react`) |
| [ESLint](https://eslint.org/) | 10.x | Linting con reglas de React Hooks |

> **Gestor de paquetes**: este proyecto usa **exclusivamente
> [pnpm](https://pnpm.io/)**. No funciona con `npm` o `yarn` (el
> lockfile oficial es `pnpm-lock.yaml`).

## Requisitos previos

Antes de continuar necesitas tener instalado:

1. **[Node.js](https://nodejs.org/) versión 20 o superior** (incluye
   `npm`, pero no lo usaremos para instalar dependencias).
   - Verifica con: `node --version`
2. **[pnpm](https://pnpm.io/install)** — el gestor de paquetes.
   - Instálalo con npm (solo esta vez, para tener el comando):
     ```bash
     npm install -g pnpm
     ```
   - O con el instalador oficial de Node:
     ```bash
     corepack enable
     ```
   - Verifica con: `pnpm --version`
3. **[Git](https://git-scm.com/)** para clonar el repositorio.
   - Verifica con: `git --version`
4. Un editor de código, recomendado **[VS Code](https://code.visualstudio.com/)**
   con las extensiones oficiales de **ESLint** y **Tailwind CSS
   IntelliSense**.

## Cómo descargar y ejecutar el proyecto

### Paso 1 — Clona el repositorio

Abre una terminal (en Windows: PowerShell o Git Bash) y ejecuta:

```bash
git clone https://github.com/esteban5tael/conceptos-basicos-desarrollo-web.git
```

Luego entra a la carpeta del proyecto:

```bash
cd conceptos-basicos-desarrollo-web
```

> **Alternativa sin Git**: si no quieres instalar Git, entra a
> [la página del repo en GitHub](https://github.com/esteban5tael/conceptos-basicos-desarrollo-web),
> presiona el botón verde **<> Code** y elige **Download ZIP**.
> Descomprime el ZIP y abre la carpeta resultante en la terminal.

### Paso 2 — Instala las dependencias

```bash
pnpm install
```

Esto descarga React, Vite, Tailwind y todas las librerías del proyecto
dentro de la carpeta `node_modules/`. Tarda solo unos segundos.

> ⚠️ **Importante**: usa `pnpm`, no `npm`. Si ejecutas `npm install`
> no habrá errores de inmediato, pero se generará un
> `package-lock.json` que mezcla gestores. Si ya lo hiciste, borra
> ese archivo.

### Paso 3 — Arranca el servidor de desarrollo

```bash
pnpm dev
```

Vite imprimirá algo como:

```
  VITE v8.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

**Abre [http://localhost:5173](http://localhost:5173) en tu navegador**
(ya sea Chrome, Firefox, Edge o Safari). Deberías ver la página de
inicio con el logo girando y el grid de niveles.

El sitio se **recarga solo** cada vez que guardas un archivo, así que
puedes editar contenido y ver los cambios al instante.

### Paso 4 — Detener el servidor

Cuando termines, vuelve a la terminal y presiona `Ctrl + C`.

### Resumen express (lo mínimo)

```bash
git clone https://github.com/esteban5tael/conceptos-basicos-desarrollo-web.git
cd conceptos-basicos-desarrollo-web
pnpm install
pnpm dev
# Abrir http://localhost:5173
```

## Comandos disponibles

Todos los comandos se ejecutan desde la raíz del proyecto con
**pnpm**:

| Comando | Qué hace |
|---|---|
| `pnpm dev` | Arranca el servidor de desarrollo con recarga en caliente |
| `pnpm build` | Compila todo: limpia `dist/`, valida tipos (`tsc -b`) y genera la versión de producción |
| `pnpm preview` | Sirve localmente la versión ya compilada de `dist/` (simula el hosting real) |
| `pnpm lint` | Ejecuta ESLint sobre todo el código para detectar errores y malas prácticas |

### Flujo de verificación recomendado

Antes de hacer un commit o entregar trabajo, ejecuta siempre:

```bash
pnpm lint && pnpm build
```

Si ambos pasan sin errores, tu código está listo.

## Rutas del sitio

El enrutamiento está definido en `src/App.tsx` con
`createBrowserRouter`:

| Ruta | Componente | Descripción |
|---|---|---|
| `/` | `Home` | Página de inicio |
| `/nivel/:slug` | `NivelPage` | Vista de un nivel (ej. `/nivel/backend-y-apis`) |
| `/concepto/:slug` | `ConceptoPage` | Vista de un concepto (ej. `/concepto/html`) |
| `*` | `NotFound` | Cualquier ruta desconocida muestra el 404 |

Los `:slug` son identificadores legibles en kebab-case generados desde
los títulos (ej. el concepto "API REST" vive en `/concepto/api-rest`).

## Atajos de teclado

| Atajo | Acción |
|---|---|
| `Cmd + K` (Mac) / `Ctrl + K` (Win/Linux) | Abre o cierra el buscador global |
| `↑` / `↓` dentro del buscador | Navega entre resultados |
| `Enter` | Abre el concepto seleccionado |
| `Esc` | Cierra el buscador o cualquier diálogo |
| `Tab` | Navega por todos los elementos interactivos (enlaces, botones) |

## Estructura del proyecto

```
conceptos-basicos-desarrollo-web/
├── public/
│   ├── favicon.ico          # Icono del sitio
│   └── logo.webp            # Logo del glosario
│
├── src/
│   ├── components/
│   │   ├── ui/              # Primitivos shadcn/ui (NO editar a mano)
│   │   │                    #   Button, Badge, Dialog, Command, etc.
│   │   ├── layout/          # Componentes de estructura del sitio
│   │   │   ├── root-layout.tsx      # Layout raíz (header + main + footer)
│   │   │   ├── header.tsx           # Header sticky con nav y menú de niveles
│   │   │   ├── footer.tsx           # Footer con créditos
│   │   │   ├── breadcrumbs.tsx      # Migas de pan
│   │   │   └── progress-indicator.tsx # Barra de progreso global
│   │   ├── conceptos/       # Componentes del concepto
│   │   │   ├── concepto-card.tsx        # Tarjeta en el grid de un nivel
│   │   │   ├── concepto-bloque.tsx      # Secciones (definición/ejemplo)
│   │   │   ├── codigo-bloque.tsx        # Bloque de código con Shiki + copiar
│   │   │   ├── concepto-acciones.tsx    # Marcar leído / copiar enlace
│   │   │   ├── concepto-navegacion.tsx  # Anterior / siguiente
│   │   │   └── concepto-tags.tsx        # Etiquetas del concepto
│   │   ├── nivel/           # Componentes del nivel
│   │   │   ├── nivel-card.tsx    # Tarjeta de nivel en el home
│   │   │   ├── nivel-header.tsx  # Encabezado con stats del nivel
│   │   │   └── nivel-sidebar.tsx # Sidebar con lista de conceptos
│   │   ├── search/          # Buscador global
│   │   │   ├── search-command.tsx   # Palette Cmd+K (cmdk)
│   │   │   ├── search-trigger.tsx   # Botón "Buscar" del header
│   │   │   └── buscar-evento.ts     # Evento custom para abrir la búsqueda
│   │   └── shared/          # Componentes reutilizables y efectos
│   │       ├── animated-counter.tsx  # Contadores animados
│   │       ├── cursor-glow.tsx       # Resplandor que sigue al cursor
│   │       ├── magnetic-button.tsx   # Botón magnético
│   │       ├── page-transition.tsx   # Transiciones entre páginas
│   │       └── scroll-progress.tsx   # Barra de progreso del scroll
│   │
│   ├── data/                # 🔹 Toda la "base de datos" del glosario
│   │   ├── db-types.ts      # Interfaces Nivel, Concepto, BloqueContenido
│   │   ├── database.ts      # Los 10 niveles + 200 conceptos + helpers
│   │   └── glosary.md       # Fuente original del contenido (Markdown)
│   │
│   ├── hooks/               # Custom hooks
│   │   ├── use-progress.ts           # Progreso en localStorage
│   │   ├── use-document-title.ts     # Título del documento
│   │   └── use-keyboard-shortcut.ts  # Atajos de teclado genéricos
│   │
│   ├── lib/                 # Utilidades e infraestructura
│   │   ├── motion-variants.ts   # Variantes de animación compartidas
│   │   ├── shiki.ts             # Singleton del resaltador de sintaxis
│   │   ├── seo.ts               # setSEO() + nombre del sitio
│   │   ├── slugify.ts           # Generador de slugs con acentos
│   │   └── utils.ts             # cn() para combinar clases
│   │
│   ├── pages/               # Páginas (rutas)
│   │   ├── home.tsx
│   │   ├── nivel-page.tsx
│   │   ├── concepto-page.tsx
│   │   └── not-found.tsx
│   │
│   ├── App.tsx              # Definición del router
│   ├── main.tsx             # Entry point de React
│   └── index.css            # Tailwind v4 + variables del tema
│
├── index.html               # HTML base (lang="es", meta OG)
├── eslint.config.js         # Configuración de ESLint
├── vite.config.ts           # Configuración de Vite (alias @/ → src/)
├── components.json          # Configuración de shadcn/ui
├── package.json             # Dependencias y scripts
├── pnpm-lock.yaml           # Lockfile de pnpm (único permitido)
└── AGENTS.md                # Reglas y convenciones del proyecto
```

### Reglas clave del proyecto (que siguen los commits)

- Los archivos se nombran en **kebab-case** (`codigo-bloque.tsx`),
  excepto los entry points (`App.tsx`, `main.tsx`).
- Los componentes se exportan en **PascalCase**.
- El alias `@/` apunta a `src/` (ej. `import { cn } from "cn"`).
- Todo el código está documentado con **JSDoc en español**.
- Prohibido el tipo `any` y los enums de TypeScript
  (`erasableSyntaxOnly` está activo).

## Cómo funciona el contenido (la "base de datos")

No hay backend: el contenido vive en `src/data/`.

```
src/data/
├── glosary.md      # Fuente original legible (Markdown)
├── db-types.ts     # Las "interfaces" del contenido
└── database.ts     # El contenido ya transcribir a TypeScript + helpers
```

### Los tipos (`db-types.ts`)

Hay dos interfaces principales:

**`Nivel`** — una sección temática:

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | `number` | Único del nivel (1 a 10) |
| `slug` | `string` | Identificador en la URL (kebab-case) |
| `titulo` | `string` | Nombre visible (ej. "Backend y APIs") |
| `descripcion` | `string` | Texto corto del nivel |
| `orden` | `number` | Posición de aparición |
| `icono` | `string` | Emoji representativo |
| `color` | `string` | Color hex principal (solo para iconos) |

**`Concepto`** — un término del glosario:

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | `number` | Único global consecutivo (1 a 200) |
| `slug` | `string` | Único en kebab-case (se usa en la URL) |
| `nivelId` | `number` | ID del nivel al que pertenece |
| `orden` | `number` | Posición dentro de su nivel |
| `titulo` | `string` | Nombre del concepto |
| `definicion` | `BloqueContenido[]` | Bloques de la definición |
| `ejemplo` | `BloqueContenido[]` | Bloques del ejemplo real |
| `analogia` | `BloqueContenido[]` | Bloques de la analogía |
| `tags` | `string[]` | 3-5 etiquetas kebab-case para buscar |

**`BloqueContenido`** es un tipo "unión" que puede ser:

- `{ tipo: "texto", contenido: string }` — un párrafo normal.
- `{ tipo: "codigo", lenguaje: string, contenido: string }` — un bloque
  de código (ej. `lenguaje: "html"`) que Shiki resaltará.

### Los helpers de consulta (`database.ts`)

Al final del archivo hay funciones ya listas para usar:

```ts
getConceptoBySlug(slug)      // Busca un concepto por su slug en la URL
getConceptoById(id)          // Busca un concepto por su id numérico
getConceptosByNivel(nivelId) // Devuelve los conceptos de un nivel, en orden
getNivelBySlug(slug)         // Busca un nivel por su slug
buscarConceptos(texto)       // Búsqueda full-text por título, defs y tags
```

> **Regla de oro**: los componentes **nunca** filtran arrays a mano;
> siempre usan estos helpers. Así el contenido queda centralizado y
> fácil de mantener.

## Cómo agregar un nuevo concepto

Supongamos que quieres agregar el concepto **"Web Components"** al
nivel 4 (Lenguajes del desarrollo web).

**Paso 1.** Abre `src/data/database.ts` y busca el array `conceptos`.

**Paso 2.** Agrega un nuevo objeto **al final del array** (o en la
posición que quieras dentro de su nivel), copiando esta plantilla y
rellenándola:

```ts
{
    id: 201, // Siguiente id libre (número único global)
    slug: "web-components", // Único, kebab-case, va en la URL
    nivelId: 4, // Nivel al que pertenece (1-10)
    orden: 22, // Posición dentro del nivel
    titulo: "Web Components",
    definicion: [
        {
            tipo: "texto",
            contenido:
                "Conjunto de tecnologías del navegador para crear " +
                "componentes HTML reutilizables e independientes.",
        },
    ],
    ejemplo: [
        {
            tipo: "codigo",
            lenguaje: "javascript",
            contenido:
                "class MiBoton extends HTMLElement {\n" +
                "  connectedCallback() {\n" +
                "    this.innerHTML = '<button>Hola</button>';\n" +
                "  }\n" +
                "}\ncustomElements.define('mi-boton', MiBoton);",
        },
    ],
    analogia: [
        {
            tipo: "texto",
            contenido:
                "Es como armar un envase independiente con todo lo " +
                "que necesita dentro: puedes reutilizarlo en cualquier " +
                "parte de tu casa (sitio web).",
        },
    ],
    tags: ["web-components", "custom-elements", "reutilizacion"],
},
```

**Paso 3.** Guarda el archivo. ¡Listo! El concepto aparece
**automáticamente**:

- ✅ En la página de su nivel (grid de tarjetas)
- ✅ En el buscador (`Cmd+K`)
- ✅ En el sidebar del nivel
- ✅ En la navegación anterior/siguiente de sus vecinos
- ✅ En el conteo de "X conceptos" de las tarjetas de nivel
- ✅ En el progreso global (suma al total)

No hay que registrar nada en ningún otro sitio: React Router y los
helpers de consulta lo detectan solos.

### Consejos para escribir buenos conceptos

1. **Definición**: una o dos frases directas. Evita círculos
   viciosos ("X es cuando usas X").
2. **Ejemplo**: siempre que sea posible, usa un bloque de código real
   y mínimo. Prefiere 6 líneas claras a 30 líneas de producción.
3. **Analogía**: compáralo con algo de la vida diaria (cocina,
   carretera, casa, oficina). Las analogías son lo que hace memorable
   el concepto.
4. **Tags**: piensa en lo que tus compañeros escribirían en el
   buscador. Incluye el término en inglés si aplica ("http", "api").
5. **Cuida los saltos de línea** dentro de código: usa `\n` explícitos
   en el string para que el bloque se vea bien.

## Cómo agregar un nuevo nivel

Si el glosario crece y necesitas un nivel 11:

**Paso 1.** En `src/data/database.ts`, agrega un objeto al array
`niveles` (respeta el orden):

```ts
{
    id: 11,
    slug: "inteligencia-artificial-web",
    titulo: "Inteligencia artificial en la web",
    descripcion:
        "Conceptos de IA aplicados al desarrollo web: " +
        "chatbots, modelos y APIs de inferencia.",
    orden: 11,
    icono: "🤖",
    color: "#EC4899", // Solo se usa en el icono, no en fondos
},
```

**Paso 2.** Asigna `nivelId: 11` a los conceptos de ese nivel.

**Paso 3.** Guarda. El nivel aparece en el home, en el menú del
header, en el menú mobile y en el buscador (que agrupa por nivel).

## Cómo funciona el progreso de lectura

Una de las funciones más útiles para estudiar: el sitio recuerda qué
conceptos ya leíste.

### Cómo se usa (para el usuario final)

1. Abre cualquier concepto.
2. Presiona el botón **"Marcar como leído"** (aparece un toast de
   confirmación).
3. La barra de progreso del header se actualiza al instante.
4. En el home, cada tarjeta de nivel muestra su propio avance
   (ej. "8 de 22 leídos").
5. Puedes desmarcarlo presionando el mismo botón.

### Cómo funciona (técnico)

- Todo vive en el hook `src/hooks/use-progress.ts`.
- Los IDs leídos se guardan en `localStorage` con la clave
  `conceptos-web:progreso`, en formato `{ "leidos": [1, 5, 23] }`.
- **Validación defensiva**: al leer del storage se verifica con un
  "type guard" (`esEstadoValido`) que el JSON tenga el formato
  correcto; si está corrupto, se ignora en vez de romper la app.
- **Sincronización multi-pestañas**: si abres el sitio en dos
  pestañas, el evento `storage` mantiene ambas al día.
- **Sin cuentas, sin servidor**: el progreso es 100% local a tu
  navegador. Borrar los datos del navegador (o usar modo incógnito)
  reinicia el progreso.

### Cómo reiniciar el progreso (manual)

1. Abre las herramientas de desarrollador (`F12`).
2. Pestaña **Application** (Chrome) o **Storage** (Firefox).
3. **Local Storage** → `http://localhost:5173`.
4. Borra la clave `conceptos-web:progreso` y recarga (`F5`).

O desde la consola:

```js
localStorage.removeItem("conceptos-web:progreso");
location.reload();
```

## Accesibilidad

El sitio está construido siguiendo buenas prácticas de accesibilidad:

- **`prefers-reduced-motion`**: quien haya configurado su sistema
  operativo para "reducir movimiento" verá el sitio **sin animaciones**
  (las transiciones, el glow del cursor y los contadores quedan
  estáticos). Se implementa con `MotionConfig reducedMotion="user"` en
  el layout raíz más verificaciones puntuales con `useReducedMotion()`.
- **Skip-link**: el primer elemento enfocable con `Tab` es un enlace
  "Saltar al contenido principal".
- **Navegación completa por teclado** en buscador, menús y diálogos.
- **`aria-label` descriptivos** en botones de solo icono (como el menú
  mobile o el buscador).
- **Contraste** manejado mediante los tokens semánticos de Tailwind
  (`text-muted-foreground`, `bg-popover`, etc.).
- **Estructura semántica**: `header`, `nav`, `main`, `footer`,
  `h1`-`h3` jerárquicos.

## Despliegue (publicar en internet)

Como es un sitio estático, puede publicarse gratis en varias plataformas.
La más fácil es **[Vercel](https://vercel.com/)**:

1. Sube el repositorio a GitHub.
2. Entra a [vercel.com](https://vercel.com/) y haz login con tu cuenta
   de GitHub.
3. Presiona **Add New → Project** y selecciona tu repositorio.
4. Vercel detecta Vite automáticamente. Acepta los valores por defecto:
   - Framework: **Vite**
   - Build Command: `pnpm build`
   - Output Directory: `dist`
5. Presiona **Deploy**. En menos de un minuto tendrás una URL
   pública tipo `conceptos-basicos-desarrollo-web.vercel.app`.

**Alternativas equivalentes**: [Netlify](https://netlify.com/)
(mismo proceso), [GitHub Pages](https://pages.github.com/) (con el
plugin `vite-plugin-serve` o ajustando la base de las rutas) o
cualquier servidor estático sirviendo la carpeta `dist/`.

### Verificar la versión de producción localmente

```bash
pnpm build     # genera la carpeta dist/
pnpm preview   # la sirve en http://localhost:4173
```

`preview` simula cómo se vería el sitio ya publicado (importante
probarlo antes de subir).

## Preguntas frecuentes (FAQ)

**¿Me sale "command not found: pnpm"?**
Aún no tienes pnpm instalado. Ejecuta `npm install -g pnpm` o
`corepack enable` (ver sección [Requisitos previos](#requisitos-previos)).

**¿Me sale un error de versión de Node?**
Verifica con `node --version`. Necesitas Node 20 o superior. Puedes
cambiar de versión fácilmente con [nvm](https://github.com/nvm-sh/nvm)
(Linux/Mac) o [nvm-windows](https://github.com/coreybutler/nvm-windows).

**¿El puerto 5173 ya está en uso?**
Cierra el proceso anterior (`Ctrl+C` en la terminal donde corría) o
arranca con otro puerto:

```bash
pnpm dev -- --port 3000
```

**¿Puedo editar los componentes de `src/components/ui/`?**
No recomendado. Son primitivos generados por shadcn/ui. Si los editas,
tus cambios se perderán si alguien vuelve a ejecutar
`pnpm dlx shadcn@latest add <componente>`. Crea tus componentes en
carpetas propias (`components/conceptos/`, `components/nivel/`, etc.).

**¿Por qué el tema es siempre oscuro y no hay botón de cambio?**
Es una decisión de diseño: el tema oscuro reduce la fatiga visual en
sesiones de estudio nocturnas (la ficha es jornada noche 😉) y
simplifica el proyecto.

**¿El sitio funciona sin internet?**
Una vez cargado en el navegador, sí: es una SPA estática. Además, al
no depender de APIs externas, el contenido de los conceptos siempre
está disponible.

**¿Por qué hay un archivo llamado `glosary.md` con una "y"?**
Es el nombre original del archivo fuente que se usó para transcribir
el contenido a TypeScript. Se mantiene así por trazabilidad histórica
del proyecto.

**¿Cómo busco un concepto específico rápidamente?**
Presiona `Cmd+K` (Mac) o `Ctrl+K` (Windows) y escribe. El buscador
encuentra conceptos por título, sinónimos en los tags, o palabras de
la definición.

## Aprendizajes del proyecto

Si estás estudiando el código, estos son los conceptos de ingeniería de
software que ejemplifica este repositorio:

- **Arquitectura por features y capas**: componentes agrupados por
  dominio (`conceptos/`, `nivel/`, `search/`) en vez de un solo
  folder gigante.
- **Separación de datos y presentación**: el contenido está
  aislado en `src/data/` con tipos estrictos; los componentes solo
  consumen helpers tipados.
- **TypeScript defensivo**: type guards (`esEstadoValido`), sin
  `any`, tipos inferidos y JSDoc.
- **Patrón singleton** (el highlighter de Shiki se crea una sola vez).
- **Persistencia en `localStorage` con validación y sincronización**.
- **Composición con Tailwind** y tokens de diseño semánticos.
- **Accesibilidad real** (no solo `alt`s): skip-link, ARIA y
  `prefers-reduced-motion`.
- **Convenciones de commits** convencionales en español
  (`feat`, `fix`, `docs`, `chore`).

## Créditos

- **Autor**: **JEBC-DeV** — desarrollado con fines académicos para mis
  compañeros de ficha.
- **Ficha**: 3534665 · Técnico en Programación de Software · Jornada
  Noche — Servicio Nacional de Aprendizaje (SENA).
- **Contenido**: 200 conceptos transcritos de `src/data/glosary.md`
  con fines de estudio.
- **Repositorio**: [github.com/esteban5tael/conceptos-basicos-desarrollo-web](https://github.com/esteban5tael/conceptos-basicos-desarrollo-web)

> **Aviso**: proyecto sin fines de lucro, elaborado como actividad
> académica. El contenido del glosario es material de apoyo para el
> estudio en el aula y no sustituye los recursos oficiales de
> formación del SENA.

---

Desarrollado con fines académicos para mis compañeros de ficha por
**JEBC-DeV**. Si encontraste un error o tienes un concepto que
agregar, ¡una Pull Request o issue es bienvenida! 🚀
