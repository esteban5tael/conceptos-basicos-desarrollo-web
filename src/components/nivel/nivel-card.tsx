/**
 * Tarjeta grande de nivel para el grid del home.
 * @module components/nivel/nivel-card
 */
import { Link } from "react-router";
import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { staggerItem } from "@/lib/motion-variants";
import { useProgress } from "@/hooks/use-progress";
import { getConceptosByNivel } from "@/data/database";
import type { Nivel } from "@/data/db-types";

/**
 * Props de la tarjeta de nivel.
 */
interface NivelCardProps {
    /** Nivel a mostrar */
    nivel: Nivel;
}

/**
 * Tarjeta enlazable a un nivel con icono, descripción, contador
 * de conceptos y barra de progreso persistida en localStorage.
 */
export function NivelCard({ nivel }: NivelCardProps) {
    const { progresoNivel } = useProgress();
    const total = getConceptosByNivel(nivel.id).length;
    const { leidos, porcentaje } = progresoNivel(nivel.id);

    return (
        <motion.li
            variants={staggerItem}
            whileHover={{
                y: -6,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 22 },
            }}
        >
            <Link
                to={`/nivel/${nivel.slug}`}
                className="block h-full rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
                <Card className="h-full bg-card/50 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                    <CardHeader className="flex-row items-start justify-between gap-3 space-y-0">
                        {/* El color del nivel se usa solo en el icono. */}
                        <span
                            className="text-4xl"
                            style={{ color: nivel.color }}
                            aria-hidden="true"
                        >
                            {nivel.icono}
                        </span>
                        <span className="text-xs tabular-nums text-muted-foreground">
                            Nivel {nivel.orden}
                        </span>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            <CardTitle className="font-heading text-lg">
                                {nivel.titulo}
                            </CardTitle>
                            <CardDescription className="line-clamp-2 text-sm">
                                {nivel.descripcion}
                            </CardDescription>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                                <span>
                                    {total} conceptos · {leidos} leídos
                                </span>
                                <span className="tabular-nums">
                                    {porcentaje}%
                                </span>
                            </div>
                            <Progress
                                value={porcentaje}
                                aria-label={`Progreso del nivel ${nivel.titulo}`}
                            />
                        </div>
                    </CardContent>
                </Card>
            </Link>
        </motion.li>
    );
}
