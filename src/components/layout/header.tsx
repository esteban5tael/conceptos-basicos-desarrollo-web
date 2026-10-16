/**
 * Header global del sitio: sticky, con navegación principal,
 * buscador (Cmd+K), indicador de progreso y menú mobile.
 * @module components/layout/header
 */
import { useState } from "react";
import { Link, NavLink } from "react-router";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { RiArrowDownSLine, RiMenu3Line } from "@remixicon/react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { fadeIn } from "@/lib/motion-variants";
import { NOMBRE_SITIO } from "@/lib/seo";
import { getConceptosByNivel, niveles } from "@/data/database";
import { SearchTrigger } from "@/components/search/search-trigger";
import { ProgressIndicator } from "@/components/layout/progress-indicator";
import { cn } from "cn";

/** Conceptos de cada nivel, calculados una sola vez al importar. */
const CONTEO_POR_NIVEL = new Map(
    niveles.map((nivel) => [nivel.id, getConceptosByNivel(nivel.id).length]),
);

/**
 * Clases del link de navegación del header.
 *
 * @param isActive - Si la ruta del link es la actual
 * @returns Clases CSS según el estado del link
 */
function clasesLinkNavegacion({ isActive }: { isActive: boolean }): string {
    return cn(
        "rounded-lg px-3 py-1.5 text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring",
        isActive
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground",
    );
}

/**
 * Clases base para los links de niveles dentro del dropdown y del sheet.
 */
const CLASES_LINK_NIVEL = cn(
    "flex w-full items-center gap-3 rounded-md px-2 py-2 text-left outline-none transition-colors",
    "hover:bg-accent hover:text-accent-foreground",
    "focus-visible:bg-accent focus-visible:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring",
);

/**
 * Encabezado global. Al hacer scroll aparece un borde inferior y
 * una sombra sutiles para separar el contenido de la navegación.
 */
export function Header() {
    const { scrollY } = useScroll();
    const [enScroll, setEnScroll] = useState(false);
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [sheetAbierto, setSheetAbierto] = useState(false);

    // Muestra el borde/sombra solo después de desplazarse un poco.
    useMotionValueEvent(scrollY, "change", (valor) => {
        setEnScroll(valor > 8);
    });

    return (
        <motion.header
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className={cn(
                "sticky top-0 z-50 border-b border-transparent bg-background/80 backdrop-blur-md transition-shadow",
                enScroll && "border-border shadow-sm",
            )}
        >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
                {/* Logo + nombre del sitio */}
                <Link
                    to="/"
                    className="flex shrink-0 items-center gap-2 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label={`Ir al inicio de ${NOMBRE_SITIO}`}
                >
                    <img
                        src="/logo.webp"
                        alt=""
                        width={32}
                        height={32}
                        className="size-8 rounded-lg"
                    />
                    <span className="hidden font-heading text-sm font-semibold md:block">
                        {NOMBRE_SITIO}
                    </span>
                </Link>

                {/* Navegación principal (desktop) */}
                <nav
                    className="hidden items-center gap-1 md:flex"
                    aria-label="Navegación principal"
                >
                    <NavLink to="/" className={clasesLinkNavegacion} end>
                        Inicio
                    </NavLink>

                    <DropdownMenu
                        open={menuAbierto}
                        onOpenChange={setMenuAbierto}
                    >
                        <DropdownMenuTrigger
                            render={
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="gap-1 text-sm text-muted-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                />
                            }
                        >
                            Niveles
                            <RiArrowDownSLine />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            align="center"
                            className="max-h-[70vh] w-80 p-2"
                        >
                            {/* Base UI exige que GroupLabel viva dentro de
                                un Group; sin él el popup lanza excepción. */}
                            <DropdownMenuGroup>
                                <DropdownMenuLabel className="px-2 py-1.5">
                                    Niveles del glosario
                                </DropdownMenuLabel>
                                {niveles.map((nivel) => (
                                    <Link
                                        key={nivel.id}
                                        to={`/nivel/${nivel.slug}`}
                                        onClick={() => setMenuAbierto(false)}
                                        className={CLASES_LINK_NIVEL}
                                    >
                                        <span
                                            className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-lg"
                                            aria-hidden="true"
                                        >
                                            {nivel.icono}
                                        </span>
                                        <span className="flex min-w-0 flex-col gap-0.5">
                                            <span className="text-sm leading-snug text-foreground">
                                                {nivel.titulo}
                                            </span>
                                            <span className="text-xs text-muted-foreground">
                                                {CONTEO_POR_NIVEL.get(
                                                    nivel.id,
                                                ) ?? 0}{" "}
                                                conceptos
                                            </span>
                                        </span>
                                    </Link>
                                ))}
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <NavLink to="/arquitectura" className={clasesLinkNavegacion}>
                        Arquitectura
                    </NavLink>
                </nav>

                {/* Acciones: búsqueda, progreso y menú mobile */}
                <div className="flex items-center gap-2">
                    <SearchTrigger />
                    <ProgressIndicator />
                    <Sheet
                        open={sheetAbierto}
                        onOpenChange={setSheetAbierto}
                    >
                        <SheetTrigger
                            render={
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="md:hidden"
                                    aria-label="Abrir menú de navegación"
                                />
                            }
                        >
                            <RiMenu3Line />
                        </SheetTrigger>
                        <SheetContent side="right">
                            <SheetHeader>
                                <SheetTitle>Menú</SheetTitle>
                            </SheetHeader>
                            <nav
                                className="flex flex-col gap-1 px-4"
                                aria-label="Navegación móvil"
                            >
                                <Link
                                    to="/"
                                    onClick={() => setSheetAbierto(false)}
                                    className={cn(
                                        CLASES_LINK_NIVEL,
                                        "text-sm text-muted-foreground hover:text-foreground",
                                    )}
                                >
                                    Inicio
                                </Link>
                                <Link
                                    to="/arquitectura"
                                    onClick={() => setSheetAbierto(false)}
                                    className={cn(
                                        CLASES_LINK_NIVEL,
                                        "text-sm text-muted-foreground hover:text-foreground",
                                    )}
                                >
                                    Arquitectura
                                </Link>
                                <Separator className="my-2" />
                                {niveles.map((nivel) => (
                                    <Link
                                        key={nivel.id}
                                        to={`/nivel/${nivel.slug}`}
                                        onClick={() => setSheetAbierto(false)}
                                        className={cn(
                                            CLASES_LINK_NIVEL,
                                            "text-sm text-muted-foreground hover:text-foreground",
                                        )}
                                    >
                                        <span aria-hidden="true">
                                            {nivel.icono}
                                        </span>
                                        {nivel.titulo}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.header>
    );
}