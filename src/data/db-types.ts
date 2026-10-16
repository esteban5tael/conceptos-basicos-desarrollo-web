/**
 * Definiciones de tipos para la base de datos del glosario de conceptos
 * de desarrollo web. Solo contiene interfaces y tipos, sin datos.
 * @module data/db-types
 */

/**
 * Representa un nivel (sección temática) del glosario.
 * Cada nivel agrupa entre 10 y 20 conceptos relacionados.
 */
export interface Nivel {
    /** Identificador numérico único del nivel (1-10) */
    readonly id: number;
    /** Slug kebab-case del nivel, usado en URLs */
    readonly slug: string;
    /** Título visible del nivel */
    readonly titulo: string;
    /** Descripción breve del contenido del nivel */
    readonly descripcion: string;
    /** Posición del nivel dentro del glosario (1-10) */
    readonly orden: number;
    /** Emoji representativo del nivel */
    readonly icono: string;
    /** Color hex principal del nivel */
    readonly color: string;
}

/**
 * Bloque de contenido de un concepto: puede ser texto plano
 * o un bloque de código con su lenguaje especificado.
 */
export type BloqueContenido =
    | {
          /** Discriminante: identifica el tipo de bloque */
          readonly tipo: "texto";
          /** Contenido del bloque de texto */
          readonly contenido: string;
      }
    | {
          /** Discriminante: identifica el tipo de bloque */
          readonly tipo: "codigo";
          /** Lenguaje del código (html, css, javascript, typescript, sql, json, bash, text) */
          readonly lenguaje: string;
          /** Contenido crudo del bloque de código */
          readonly contenido: string;
      };

/**
 * Representa un concepto del glosario perteneciente a un nivel.
 * Contiene definición, ejemplo real y analogía del concepto.
 */
export interface Concepto {
    /** Identificador numérico único global (1-200) */
    readonly id: number;
    /** Slug kebab-case del concepto, usado en URLs */
    readonly slug: string;
    /** Identificador del nivel al que pertenece */
    readonly nivelId: number;
    /** Posición del concepto dentro de su nivel */
    readonly orden: number;
    /** Título original del concepto */
    readonly titulo: string;
    /** Definición literal del concepto */
    readonly definicion: string;
    /** Ejemplo real, dividido en bloques de texto y código */
    readonly ejemplo: readonly BloqueContenido[];
    /** Analogía cotidiana del concepto */
    readonly analogia: string;
    /** Etiquetas kebab-case para búsqueda y filtrado */
    readonly tags: readonly string[];
}
