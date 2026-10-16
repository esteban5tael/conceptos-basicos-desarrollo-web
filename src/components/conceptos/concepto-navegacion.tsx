/**
 * Navegación global al concepto anterior y al siguiente,
 * recorriendo los 200 conceptos ordenados por id.
 * @module components/conceptos/concepto-navegacion
 */
import { Link } from "react-router";
import { motion } from "motion/react";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import { conceptos } from "@/data/database";
import { fadeIn } from "@/lib/motion-variants";
import type { Concepto } from "@/data/db-types";
import { cn } from "cn";

/**
 * Props de la navegación entre conceptos.
 */
interface ConceptoNavegacionProps {
    /** ID del concepto actual, usado para ubicar la posición */
    conceptoId: number;
}

/**
 * Botones "← Anterior" y "Siguiente →" entre conceptos globales.
 * Los extremos se ocultan para dejar el espacio equilibrado.
 */
export function ConceptoNavegacion({ conceptoId }: ConceptoNavegacionProps) {
    const indice = conceptos.findIndex((c) => c.id === conceptoId);
    const anterior = indice > 0 ? conceptos[indice - 1] : undefined;
    const siguiente =
        indice >= 0 && indice < conceptos.length - 1
            ? conceptos[indice + 1]
            : undefined;

    return (
        <motion.nav
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex items-stretch gap-3"
            aria-label="Navegación entre conceptos"
        >
            {anterior ? (
                <EnlaceConcepto concepto={anterior} direccion="anterior" />
            ) : (
                <div className="flex-1" aria-hidden="true" />
            )}
            {siguiente ? (
                <EnlaceConcepto concepto={siguiente} direccion="siguiente" />
            ) : (
                <div className="flex-1" aria-hidden="true" />
            )}
        </motion.nav>
    );
}

/**
 * Props del enlace a un concepto vecino.
 */
interface EnlaceConceptoProps {
    /** Concepto enlazado */
    concepto: Concepto;
    /** Lado del enlace: "anterior" o "siguiente" */
    direccion: "anterior" | "siguiente";
}

/**
 * Enlace estilizado al concepto anterior o siguiente.
 */
function EnlaceConcepto({ concepto, direccion }: EnlaceConceptoProps) {
    const esAnterior = direccion === "anterior";

    return (
        <Link
            to={`/concepto/${concepto.slug}`}
            rel={esAnterior ? "prev" : "next"}
            className={cn(
                "group flex flex-1 items-center gap-2 rounded-xl border border-border bg-card px-3 py-2.5 outline-none transition-colors hover:border-primary/30 focus-visible:ring-2 focus-visible:ring-ring",
                esAnterior ? "text-left" : "text-right",
            )}
        >
            {esAnterior && (
                <RiArrowLeftLine
                    className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-x-0.5"
                    aria-hidden="true"
                />
            )}
            <span className="flex min-w-0 flex-col gap-0.5">
                <span className="text-xs text-muted-foreground">
                    {esAnterior ? "Anterior" : "Siguiente"}
                </span>
                <span className="truncate text-sm font-medium">
                    {concepto.titulo}
                </span>
            </span>
            {!esAnterior && (
                <RiArrowRightLine
                    className="ml-auto size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                />
            )}
        </Link>
    );
}
