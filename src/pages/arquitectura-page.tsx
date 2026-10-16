/**
 * Página de arquitectura: muestra el diagrama interactivo de la
 * infraestructura del sitio embebido desde /arquitectura.html, el
 * HTML estático generado por la skill de Archify.
 * @module pages/arquitectura-page
 */
import { useEffect } from "react";
import { motion } from "motion/react";
import { setSEO, NOMBRE_SITIO } from "@/lib/seo";
import { fadeInUp } from "@/lib/motion-variants";

/** Ruta del diagrama HTML servido desde public/. */
const RUTA_DIAGRAMA = "/arquitectura.html";

/**
 * Página con el diagrama navegable de la infraestructura del sitio.
 * El visor interactivo corre dentro de un iframe para conservar la
 * navegación global del glosario (header, menú y búsqueda). En
 * pantallas sm o mayores el diagrama ocupa todo el ancho disponible
 * y casi toda la altura de la ventana, sin el tope max-w-7xl.
 */
export function ArquitecturaPage() {
    useEffect(() => {
        setSEO({
            title: `Arquitectura · ${NOMBRE_SITIO}`,
            description:
                "Diagrama interactivo de la infraestructura del sitio: compilación con Vite y React Compiler, ejecución en el navegador y persistencia en localStorage.",
        });
    }, []);

    return (
        <div className="mx-auto flex w-full flex-col gap-3 px-3 py-4 sm:gap-4 sm:px-5 sm:py-5">
            {/* Encabezado compacto: en escritorio título y descripción
                comparten una fila para cederle altura al diagrama. */}
            <motion.header
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between sm:gap-6"
            >
                <h1 className="font-heading text-xl font-semibold text-balance sm:text-2xl">
                    Arquitectura del sitio
                </h1>
                <p className="max-w-2xl text-xs text-muted-foreground sm:text-sm">
                    Cómo está construido este glosario por dentro.{" "}
                    <span className="text-foreground">
                        El diagrama es interactivo: acerca, móvelo, busca
                        nodos y traza rutas entre componentes.
                    </span>
                </p>
            </motion.header>

            <motion.iframe
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                src={RUTA_DIAGRAMA}
                title="Diagrama interactivo de la infraestructura del sitio"
                className="h-[70vh] min-h-[480px] w-full rounded-xl border border-border bg-card sm:h-[calc(100dvh-10rem)]"
            />
        </div>
    );
}
