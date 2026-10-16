/**
 * Tarjeta de concepto usada en la lista de un nivel.
 * @module components/conceptos/concepto-card
 */
import { Link } from "react-router";
import { motion } from "motion/react";
import { RiCheckLine } from "@remixicon/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { staggerItem } from "@/lib/motion-variants";
import { useProgress } from "@/hooks/use-progress";
import type { Concepto } from "@/data/db-types";

/** Cantidad máxima de caracteres de la definición en la tarjeta. */
const LARGO_VISTA_PREVIA = 120;

/** Cantidad máxima de tags mostrados en la tarjeta. */
const MAXIMO_TAGS = 3;

/**
 * Props de la tarjeta de concepto.
 */
interface ConceptoCardProps {
    /** Concepto a mostrar */
    concepto: Concepto;
}

/**
 * Tarjeta enlazable con número, título, vista previa de la
 * definición, tags y estado de leído.
 */
export function ConceptoCard({ concepto }: ConceptoCardProps) {
    const { isLeido } = useProgress();
    const leido = isLeido(concepto.id);

    const vistaPrevia =
        concepto.definicion.length > LARGO_VISTA_PREVIA
            ? `${concepto.definicion.slice(0, LARGO_VISTA_PREVIA).trimEnd()}…`
            : concepto.definicion;

    return (
        <motion.li
            variants={staggerItem}
            whileHover={{
                y: -4,
                scale: 1.01,
                transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
        >
            <Link
                to={`/concepto/${concepto.slug}`}
                className="block h-full rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
                <Card className="h-full gap-3 bg-card/50 transition-colors hover:border-primary/30">
                    <CardHeader className="flex-row items-center justify-between gap-2 space-y-0">
                        <Badge variant="secondary" className="tabular-nums">
                            #{String(concepto.id).padStart(3, "0")}
                        </Badge>
                        {leido && (
                            <span className="flex items-center gap-1 text-xs text-primary">
                                <RiCheckLine
                                    className="size-4"
                                    aria-hidden="true"
                                />
                                <span className="sr-only">
                                    Concepto leído
                                </span>
                            </span>
                        )}
                    </CardHeader>
                    <CardContent className="flex flex-col gap-3">
                        <CardTitle className="font-heading text-base leading-snug">
                            {concepto.titulo}
                        </CardTitle>
                        <p className="line-clamp-3 text-sm text-muted-foreground">
                            {vistaPrevia}
                        </p>
                        {concepto.tags.length > 0 && (
                            <ul
                                className="flex flex-wrap gap-1"
                                aria-label="Etiquetas del concepto"
                            >
                                {concepto.tags
                                    .slice(0, MAXIMO_TAGS)
                                    .map((tag) => (
                                        <li key={tag}>
                                            <Badge
                                                variant="outline"
                                                className="text-xs text-muted-foreground"
                                            >
                                                {tag}
                                            </Badge>
                                        </li>
                                    ))}
                            </ul>
                        )}
                    </CardContent>
                </Card>
            </Link>
        </motion.li>
    );
}
