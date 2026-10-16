/**
 * Layout raíz del router: reúne header, footer, transiciones,
 * buscador global, toasts y el skip link de accesibilidad.
 * @module components/layout/root-layout
 */
import { Outlet } from "react-router";
import { MotionConfig } from "motion/react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/shared/scroll-progress";
import { CursorGlow } from "@/components/shared/cursor-glow";
import { PageTransition } from "@/components/shared/page-transition";
import { SearchCommand } from "@/components/search/search-command";

/**
 * Estructura compartida por todas las rutas del sitio.
 * `MotionConfig reducedMotion="user"` anula las transformaciones
 * para quien tenga activado "reducir movimiento" en su sistema.
 */
export function RootLayout() {
    return (
        <MotionConfig reducedMotion="user">
            <TooltipProvider>
                <a
                    href="#contenido"
                    className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-70 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
                >
                    Saltar al contenido
                </a>
                <ScrollProgress />
                <Header />
                <main id="contenido" className="min-h-screen">
                    <PageTransition>
                        <Outlet />
                    </PageTransition>
                </main>
                <Footer />
                <CursorGlow />
                <SearchCommand />
                <Toaster />
            </TooltipProvider>
        </MotionConfig>
    );
}
