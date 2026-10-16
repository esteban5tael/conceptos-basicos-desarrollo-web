/**
 * Hook que aplica el título del documento con el sufijo del sitio.
 * @module hooks/use-document-title
 */
import { useEffect } from "react";
import { NOMBRE_SITIO } from "@/lib/seo";

/**
 * Establece `document.title` como "{titulo} · {NOMBRE_SITIO}".
 *
 * @param titulo - Título específico de la página actual
 */
export function useDocumentTitle(titulo: string): void {
    useEffect(() => {
        document.title = `${titulo} · ${NOMBRE_SITIO}`;
    }, [titulo]);
}
