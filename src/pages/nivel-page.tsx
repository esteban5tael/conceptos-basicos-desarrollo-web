/**
 * Página de nivel: sidebar con la lista de conceptos, encabezado
 * con stats y grid de tarjetas de concepto.
 * @module pages/nivel-page
 */
import { useEffect } from "react";
import { useParams } from "react-router";
import { motion } from "motion/react";
import { NivelHeader } from "@/components/nivel/nivel-header";
import { NivelSidebar } from "@/components/nivel/nivel-sidebar";
import { ConceptoCard } from "@/components/conceptos/concepto-card";
import { NotFound } from "@/pages/not-found";
import { getConceptosByNivel, getNivelBySlug } from "@/data/database";
import { setSEO, NOMBRE_SITIO } from "@/lib/seo";
import { staggerContainer } from "@/lib/motion-variants";

/**
 * Página de un nivel del glosario, identificada por su slug.
 * Si el slug no corresponde a un nivel existente, muestra 404.
 */
export function NivelPage() {
    const { slug = "" } = useParams();
    const nivel = getNivelBySlug(slug);

    useEffect(() => {
        if (!nivel) return;
        setSEO({
            title: `${nivel.titulo} · ${NOMBRE_SITIO}`,
            description: nivel.descripcion,
        });
    }, [nivel]);

    if (!nivel) return <NotFound />;

    const conceptosDelNivel = getConceptosByNivel(nivel.id);

    return (
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
                <NivelSidebar nivel={nivel} />
                <div className="flex min-w-0 flex-col gap-8">
                    <NivelHeader nivel={nivel} />
                    <motion.ul
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
                    >
                        {conceptosDelNivel.map((concepto) => (
                            <ConceptoCard
                                key={concepto.id}
                                concepto={concepto}
                            />
                        ))}
                    </motion.ul>
                </div>
            </div>
        </div>
    );
}
