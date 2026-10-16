/**
 * Utilidad de SEO dinámico: actualiza <title> y las etiquetas
 * meta/OG de la página actual desde el cliente.
 * @module lib/seo
 */

/** Nombre visible del sitio, usado como sufijo de los títulos. */
export const NOMBRE_SITIO = "Conceptos Básicos de Desarrollo Web";

/** Imagen OG por defecto cuando la página no define una propia. */
const IMAGEN_POR_DEFECTO = "/logo.webp";

/**
 * Opciones para configurar el SEO de una página.
 */
interface OpcionesSEO {
    /** Título completo de la página (sin sufijo automático) */
    title: string;
    /** Meta description y og:description */
    description?: string;
    /** Ruta de la imagen OG; usa /logo.webp si se omite */
    image?: string;
}

/**
 * Crea o actualiza una etiqueta <meta> en el <head> del documento.
 *
 * @param nombre - Valor del atributo name o property
 * @param contenido - Contenido de la meta; si es undefined no se crea
 * @param atributo - Si es "property" se usa og:* (por defecto "name")
 */
function setMeta(
    nombre: string,
    contenido: string | undefined,
    atributo: "name" | "property" = "name",
): void {
    if (!contenido) return;

    const selector = `meta[${atributo}="${nombre}"]`;
    let meta = document.head.querySelector<HTMLMetaElement>(selector);

    if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(atributo, nombre);
        document.head.appendChild(meta);
    }
    meta.setAttribute("content", contenido);
}

/**
 * Aplica el SEO de la página actual: título, description y Open Graph.
 *
 * @param opciones - Título, descripción e imagen de la página
 */
export function setSEO({ title, description, image }: OpcionesSEO): void {
    document.title = title;
    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:image", image ?? IMAGEN_POR_DEFECTO, "property");
    setMeta("og:type", "website", "property");
}
