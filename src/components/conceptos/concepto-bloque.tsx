/**
 * Renderizador de los bloques de contenido de un concepto:
 * párrafos de texto o bloques de código resaltados.
 * @module components/conceptos/concepto-bloque
 */
import { motion } from "motion/react";
import { fadeInUp } from "@/lib/motion-variants";
import { CodigoBloque } from "@/components/conceptos/codigo-bloque";
import type { BloqueContenido } from "@/data/db-types";

/**
 * Props del bloque de contenido.
 */
interface ConceptoBloqueProps {
    /** Bloque discrimenado por tipo (texto o código) */
    bloque: BloqueContenido;
}

/**
 * Renderiza un bloque según su tipo. El texto entra con fadeInUp
 * y el código delega en CodigoBloque.
 */
export function ConceptoBloque({ bloque }: ConceptoBloqueProps) {
    if (bloque.tipo === "codigo") {
        return (
            <CodigoBloque
                codigo={bloque.contenido}
                lenguaje={bloque.lenguaje}
            />
        );
    }

    return (
        <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-sm leading-relaxed text-muted-foreground"
        >
            {bloque.contenido}
        </motion.p>
    );
}
