/**
 * Sidebar de nivel: lista de conceptos con estado de leído,
 * item activo y barra de progreso. Desktop: sticky; mobile: Sheet.
 * @module components/nivel/nivel-sidebar
 */
import { Link, useLocation } from "react-router";
import { RiCheckLine, RiListUnordered } from "@remixicon/react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { useProgress } from "@/hooks/use-progress";
import { getConceptosByNivel } from "@/data/database";
import type { Concepto, Nivel } from "@/data/db-types";
import { cn } from "cn";

/**
 * Props del sidebar de nivel.
 */
interface NivelSidebarProps {
    /** Nivel cuyos conceptos se listan */
    nivel: Nivel;
}

/**
 * Sidebar con la lista de conceptos de un nivel.
 * En desktop queda sticky; en mobile se abre con un Sheet.
 */
export function NivelSidebar({ nivel }: NivelSidebarProps) {
    const location = useLocation();
    const { progresoNivel } = useProgress();
    const { leidos, porcentaje } = progresoNivel(nivel.id);
    const conceptosDelNivel = getConceptosByNivel(nivel.id);

    /** Ruta del concepto activo según la URL actual. */
    const rutaActiva = location.pathname;

    return (
        <>
            {/* Desktop: sidebar sticky */}
            <aside className="sticky top-20 hidden h-fit lg:block">
                <div className="rounded-xl border border-border bg-card/50 p-4">
                    <EncabezadoSidebar
                        titulo={nivel.titulo}
                        icono={nivel.icono}
                        leidos={leidos}
                        total={conceptosDelNivel.length}
                        porcentaje={porcentaje}
                    />
                    {/* Base UI scrollea en el Viewport, que tiene
                        height:100%; contra un Root de altura auto eso
                        se resuelve como auto y el max-h del Root solo
                        recorta sin scrollbar. Por eso el límite va
                        directo sobre el Viewport. */}
                    <ScrollArea className="mt-4 [&_[data-slot=scroll-area-viewport]]:max-h-[calc(100vh-20rem)]">
                        <ListaConceptos
                            conceptos={conceptosDelNivel}
                            rutaActiva={rutaActiva}
                        />
                    </ScrollArea>
                </div>
            </aside>

            {/* Mobile: botón que abre el Sheet con la misma lista */}
            <div className="lg:hidden">
                <Sheet>
                    <SheetTrigger
                        render={
                            <Button
                                variant="outline"
                                className="w-full gap-2"
                            />
                        }
                    >
                        <RiListUnordered />
                        Ver conceptos del nivel ({conceptosDelNivel.length})
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SheetHeader>
                            <SheetTitle>
                                {nivel.icono} {nivel.titulo}
                            </SheetTitle>
                        </SheetHeader>
                        <div className="px-4">
                            <Progress
                                value={porcentaje}
                                aria-label={`Progreso del nivel ${nivel.titulo}`}
                            />
                            <p className="mt-1 text-xs text-muted-foreground">
                                {leidos} de {conceptosDelNivel.length} leídos ·{" "}
                                {porcentaje}%
                            </p>
                        </div>
                        <ScrollArea className="px-4 [&_[data-slot=scroll-area-viewport]]:max-h-[calc(100vh-14rem)]">
                            <ListaConceptos
                                conceptos={conceptosDelNivel}
                                rutaActiva={rutaActiva}
                            />
                        </ScrollArea>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    );
}

/**
 * Props del encabezado del sidebar.
 */
interface EncabezadoSidebarProps {
    /** Título del nivel */
    titulo: string;
    /** Emoji del nivel */
    icono: string;
    /** Conceptos leídos del nivel */
    leidos: number;
    /** Total de conceptos del nivel */
    total: number;
    /** Porcentaje de progreso del nivel */
    porcentaje: number;
}

/**
 * Título, contador y barra de progreso del nivel.
 */
function EncabezadoSidebar({
    titulo,
    icono,
    leidos,
    total,
    porcentaje,
}: EncabezadoSidebarProps) {
    return (
        <div className="flex flex-col gap-2">
            <h2 className="font-heading text-sm font-semibold">
                <span aria-hidden="true">{icono}</span> {titulo}
            </h2>
            <Progress
                value={porcentaje}
                aria-label={`Progreso del nivel ${titulo}`}
            />
            <p className="text-xs text-muted-foreground">
                {leidos} de {total} leídos · {porcentaje}%
            </p>
        </div>
    );
}

/**
 * Props de la lista de conceptos.
 */
interface ListaConceptosProps {
    /** Conceptos del nivel, en orden */
    conceptos: readonly Concepto[];
    /** Ruta activa actual para resaltar el item */
    rutaActiva: string;
}

/**
 * Lista enlazable de los conceptos de un nivel con check de leído.
 */
function ListaConceptos({ conceptos, rutaActiva }: ListaConceptosProps) {
    const { isLeido } = useProgress();

    return (
        <ul className="flex flex-col gap-0.5">
            {conceptos.map((concepto) => {
                const activo =
                    rutaActiva === `/concepto/${concepto.slug}`;
                const leido = isLeido(concepto.id);

                return (
                    <li key={concepto.id}>
                        <Link
                            to={`/concepto/${concepto.slug}`}
                            aria-current={activo ? "page" : undefined}
                            className={cn(
                                "flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring",
                                activo
                                    ? "bg-muted text-foreground"
                                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
                            )}
                        >
                            <span className="shrink-0 text-xs tabular-nums">
                                {String(concepto.id).padStart(3, "0")}
                            </span>
                            <span className="truncate">
                                {concepto.titulo}
                            </span>
                            {leido && (
                                <>
                                    <RiCheckLine
                                        className="ml-auto size-4 shrink-0 text-primary"
                                        aria-hidden="true"
                                    />
                                    <span className="sr-only">
                                        (leído)
                                    </span>
                                </>
                            )}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
