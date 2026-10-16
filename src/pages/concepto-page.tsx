/**
 * Página de concepto: definición, ejemplo real, analogía, tags,
 * acciones y navegación global al concepto anterior/siguiente.
 * @module pages/concepto-page
 */
import { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router";
import { motion } from "motion/react";
import { RiLightbulbLine } from "@remixicon/react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { NivelSidebar } from "@/components/nivel/nivel-sidebar";
import { ConceptoBloque } from "@/components/conceptos/concepto-bloque";
import { ConceptoAcciones } from "@/components/conceptos/concepto-acciones";
import { ConceptoNavegacion } from "@/components/conceptos/concepto-navegacion";
import { ConceptoTags } from "@/components/conceptos/concepto-tags";
import { NotFound } from "@/pages/not-found";
import { getConceptoBySlug, niveles } from "@/data/database";
import { setSEO, NOMBRE_SITIO } from "@/lib/seo";
import { fadeInUp } from "@/lib/motion-variants";

/** Longitud máxima de la meta description del concepto. */
const LARGO_DESCRIPTION = 160;

/**
 * Título de una sección de contenido del concepto.
 *
 * @param texto - Texto de la sección
 * @returns Elemento de título estilizado
 */
function TituloSeccion({ texto }: { texto: string }) {
    return (
        <h2 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            {texto}
        </h2>
    );
}

/**
 * Página de un concepto del glosario, identificada por su slug.
 * Si el slug no corresponde a un concepto existente, muestra 404.
 */
export function ConceptoPage() {
    const { slug = "" } = useParams();
    const concepto = getConceptoBySlug(slug);

    /** Nivel al que pertenece el concepto, para el sidebar. */
    const nivel = useMemo(
        () =>
            concepto
                ? niveles.find((n) => n.id === concepto.nivelId)
                : undefined,
        [concepto],
    );

    useEffect(() => {
        if (!concepto) return;
        setSEO({
            title: `${concepto.titulo} · ${NOMBRE_SITIO}`,
            description: concepto.definicion.slice(0, LARGO_DESCRIPTION),
        });
    }, [concepto]);

    if (!concepto || !nivel) return <NotFound />;

    return (
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
                <NivelSidebar nivel={nivel} />
                <article className="flex min-w-0 flex-col gap-8">
                    <Breadcrumbs />

                    <motion.header
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="flex flex-col gap-3"
                    >
                        <div className="flex flex-wrap items-center gap-2">
                            <Badge variant="secondary" className="tabular-nums">
                                #{String(concepto.id).padStart(3, "0")}
                            </Badge>
                            <Badge
                                variant="outline"
                                render={
                                    <Link to={`/nivel/${nivel.slug}`} />
                                }
                                className="gap-1 text-muted-foreground"
                            >
                                <span aria-hidden="true">
                                    {nivel.icono}
                                </span>
                                {nivel.titulo}
                            </Badge>
                        </div>
                        <h1 className="font-heading text-3xl font-semibold text-balance sm:text-4xl">
                            {concepto.titulo}
                        </h1>
                    </motion.header>

                    <motion.section
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="flex flex-col gap-3"
                        aria-labelledby="seccion-definicion"
                    >
                        <TituloSeccion texto="Definición" />
                        <p
                            id="seccion-definicion"
                            className="text-base leading-relaxed text-foreground"
                        >
                            {concepto.definicion}
                        </p>
                    </motion.section>

                    {concepto.ejemplo.length > 0 && (
                        <section
                            className="flex flex-col gap-4"
                            aria-labelledby="seccion-ejemplo"
                        >
                            <TituloSeccion texto="Ejemplo real" />
                            <h2 id="seccion-ejemplo" className="sr-only">
                                Ejemplo real
                            </h2>
                            <div className="flex flex-col gap-4">
                                {concepto.ejemplo.map((bloque, indice) => (
                                    <ConceptoBloque
                                        key={`${bloque.tipo}-${indice}`}
                                        bloque={bloque}
                                    />
                                ))}
                            </div>
                        </section>
                    )}

                    <section
                        className="flex flex-col gap-2 rounded-xl border border-primary/30 bg-primary/5 p-5"
                        aria-labelledby="seccion-analogia"
                    >
                        <h2
                            id="seccion-analogia"
                            className="flex items-center gap-2 text-xs font-medium tracking-wide text-primary uppercase"
                        >
                            <RiLightbulbLine
                                className="size-4"
                                aria-hidden="true"
                            />
                            Analogía
                        </h2>
                        <p className="text-sm leading-relaxed text-foreground">
                            {concepto.analogia}
                        </p>
                    </section>

                    <Separator />

                    <ConceptoTags tags={concepto.tags} />
                    <ConceptoAcciones
                        conceptoId={concepto.id}
                        nivelSlug={nivel.slug}
                        tituloConcepto={concepto.titulo}
                    />
                    <ConceptoNavegacion conceptoId={concepto.id} />
                </article>
            </div>
        </div>
    );
}
