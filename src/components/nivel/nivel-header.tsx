/**
 * Encabezado de la página de nivel: breadcrumbs, icono, título,
 * descripción, estadísticas y navegación entre niveles.
 * @module components/nivel/nivel-header
 */
import { Link } from "react-router";
import { motion } from "motion/react";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { fadeInUp } from "@/lib/motion-variants";
import { useProgress } from "@/hooks/use-progress";
import { niveles } from "@/data/database";
import type { Nivel } from "@/data/db-types";

/**
 * Props del encabezado de nivel.
 */
interface NivelHeaderProps {
    /** Nivel representado por la página */
    nivel: Nivel;
}

/**
 * Encabezado completo del nivel con stats y nav a niveles vecinos.
 */
export function NivelHeader({ nivel }: NivelHeaderProps) {
    const { progresoNivel } = useProgress();
    const { leidos, total, porcentaje } = progresoNivel(nivel.id);

    const indice = niveles.findIndex((n) => n.id === nivel.id);
    const anterior = indice > 0 ? niveles[indice - 1] : undefined;
    const siguiente =
        indice >= 0 && indice < niveles.length - 1
            ? niveles[indice + 1]
            : undefined;

    return (
        <header className="flex flex-col gap-6">
            <Breadcrumbs />

            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="flex flex-col gap-4"
            >
                <div className="flex items-start gap-4">
                    {/* El color del nivel se usa solo en el icono. */}
                    <span
                        className="text-5xl"
                        style={{ color: nivel.color }}
                        aria-hidden="true"
                    >
                        {nivel.icono}
                    </span>
                    <div className="flex min-w-0 flex-col gap-2">
                        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                            Nivel {nivel.orden}
                        </p>
                        <h1 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                            {nivel.titulo}
                        </h1>
                    </div>
                </div>

                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {nivel.descripcion}
                </p>

                <p
                    className="text-sm text-muted-foreground"
                    aria-label={`${total} conceptos, ${leidos} leídos, ${porcentaje} por ciento de progreso`}
                >
                    {total} conceptos · {leidos} leídos · {porcentaje}%
                </p>
            </motion.div>

            <nav
                className="flex flex-wrap items-center gap-2"
                aria-label="Navegación entre niveles"
            >
                {anterior ? (
                    <Button
                        variant="outline"
                        render={
                            <Link to={`/nivel/${anterior.slug}`} />
                        }
                        className="gap-1.5"
                    >
                        <RiArrowLeftLine />
                        Nivel anterior
                    </Button>
                ) : (
                    <Button
                        variant="outline"
                        disabled
                        className="gap-1.5"
                    >
                        <RiArrowLeftLine />
                        Nivel anterior
                    </Button>
                )}
                {siguiente ? (
                    <Button
                        variant="outline"
                        render={
                            <Link to={`/nivel/${siguiente.slug}`} />
                        }
                        className="gap-1.5"
                    >
                        Nivel siguiente
                        <RiArrowRightLine />
                    </Button>
                ) : (
                    <Button
                        variant="outline"
                        disabled
                        className="gap-1.5"
                    >
                        Nivel siguiente
                        <RiArrowRightLine />
                    </Button>
                )}
            </nav>
        </header>
    );
}
