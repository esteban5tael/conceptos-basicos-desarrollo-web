/**
 * Footer global con créditos, ficha del programa y año dinámico.
 * @module components/layout/footer
 */
import { Link } from "react-router";
import { Separator } from "@/components/ui/separator";
import { NOMBRE_SITIO } from "@/lib/seo";

/**
 * Pie de página del sitio.
 */
export function Footer() {
    const anio = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-background">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-2 text-center">
                    <Link
                        to="/"
                        className="flex items-center gap-2 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                        <img
                            src="/logo.webp"
                            alt=""
                            width={24}
                            height={24}
                            className="size-6 rounded"
                        />
                        <span className="text-sm font-semibold">
                            {NOMBRE_SITIO}
                        </span>
                    </Link>
                    <p className="text-sm text-muted-foreground">
                        Desarrollado con fines académicos para mis compañeros
                        de ficha por JEBC-DeV
                    </p>
                    <p className="text-xs text-muted-foreground">
                        Ficha 3534665 · Técnico en Programación de Software ·
                        Jornada Noche
                    </p>
                </div>
                <Separator />
                <p className="text-center text-xs text-muted-foreground">
                    © {anio} {NOMBRE_SITIO}. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}
