/**
 * Transición animada entre rutas: espera a que salga la página
 * anterior (AnimatePresence mode="wait") y luego entra la nueva.
 * @module components/shared/page-transition
 */
import type { ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLocation } from "react-router";
import { pageTransition } from "@/lib/motion-variants";

/**
 * Props del wrapper de transición de página.
 */
interface PageTransitionProps {
    /** Contenido de la ruta actual (normalmente el Outlet) */
    children: ReactNode;
}

/**
 * Envuelve el outlet del router y anima la entrada/salida de cada
 * página usando la ubicación actual como key de AnimatePresence.
 */
export function PageTransition({ children }: PageTransitionProps) {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={pageTransition}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
