/**
 * Barra de progreso de lectura fija en el tope de la página.
 * @module components/shared/scroll-progress
 */
import { motion, useScroll, useSpring } from "motion/react";

/** Rigidez del resorte que suaviza la barra de scroll. */
const RIGIDEZ = 120;

/** Amortiguación del resorte que suaviza la barra de scroll. */
const AMORTIGUACION = 25;

/**
 * Barra fina que refleja cuánto se ha recorrido la página.
 */
export function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: RIGIDEZ,
        damping: AMORTIGUACION,
    });

    return (
        <motion.div
            className="fixed top-0 right-0 left-0 z-[60] h-0.5 origin-left bg-primary"
            style={{ scaleX }}
            role="progressbar"
            aria-label="Progreso de lectura de la página"
        />
    );
}
