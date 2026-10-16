/**
 * Singleton de Shiki para el resaltado de sintaxis.
 * El highlighter se crea una sola vez (es costoso) y se reutiliza
 * en todos los bloques de código del glosario.
 * @module lib/shiki
 */
import { createHighlighter, type Highlighter } from "shiki";

/** Tema oscuro de GitHub usado en todos los bloques de código. */
const TEMA = "github-dark-default";

/** Lenguaje de reserva cuando el indicado no está soportado. */
const LENGUAJE_RESERVA = "plaintext";

/** Promesa del highlighter compartido entre todos los componentes. */
let highlighterPromise: Promise<Highlighter> | null = null;

/**
 * Obtiene (o crea) el highlighter singleton de Shiki.
 *
 * La primera llamada carga los temas y lenguajes; las siguientes
 * devuelven la misma promesa ya resuelta.
 *
 * @returns Promesa con el highlighter listo para usar
 */
export function getHighlighter(): Promise<Highlighter> {
    if (!highlighterPromise) {
        highlighterPromise = createHighlighter({
            themes: [TEMA],
            langs: [
                "html",
                "css",
                "javascript",
                "typescript",
                "sql",
                "json",
                "bash",
                "text",
            ],
        });
    }
    return highlighterPromise;
}

/**
 * Resalta un bloque de código y devuelve su HTML generado por Shiki.
 *
 * Si el lenguaje pedido no está cargado, usa `plaintext` para no
 * romper el render.
 *
 * @param codigo - Código crudo a resaltar
 * @param lenguaje - Lenguaje del bloque (html, css, javascript, etc.)
 * @returns HTML con los spans de resaltado de Shiki
 * @throws {Error} Si Shiki no puede cargar el highlighter
 */
export async function resaltarCodigo(
    codigo: string,
    lenguaje: string,
): Promise<string> {
    const highlighter = await getHighlighter();
    const cargados = highlighter.getLoadedLanguages();
    const lenguajeValido = cargados.includes(lenguaje)
        ? lenguaje
        : LENGUAJE_RESERVA;
    return highlighter.codeToHtml(codigo, {
        lang: lenguajeValido,
        theme: TEMA,
    });
}
