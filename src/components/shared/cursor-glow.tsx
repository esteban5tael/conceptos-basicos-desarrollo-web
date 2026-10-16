/**
 * Resplandor radial que sigue al cursor en pantallas grandes.
 * Elemento puramente decorativo, sin interacción.
 * @module components/shared/cursor-glow
 */
import { useEffect } from "react";
import {
    motion,
    useMotionValue,
    useReducedMotion,
    useSpring,
} from "motion/react";

/** Rigidez del resorte que suaviza el resplandor. */
const RIGIDEZ = 60;

/** Amortigación del resorte que suaviza el resplandor. */
const AMORTIGUACION = 20;

/** Posición inicial fuera de pantalla. */
const POSICION_INICIAL = -500;

/**
 * Halo decorativo que sigue al mouse. Solo visible en desktop y
 * desaparece con `prefers-reduced-motion`.
 */
export function CursorGlow() {
    const reducirMovimiento = useReducedMotion();
    const x = useMotionValue(POSICION_INICIAL);
    const y = useMotionValue(POSICION_INICIAL);
    const xSuave = useSpring(x, {
        stiffness: RIGIDEZ,
        damping: AMORTIGUACION,
    });
    const ySuave = useSpring(y, {
        stiffness: RIGIDEZ,
        damping: AMORTIGUACION,
    });

    useEffect(() => {
        if (reducirMovimiento) return;

        const alMoverMouse = (evento: MouseEvent) => {
            x.set(evento.clientX);
            y.set(evento.clientY);
        };

        window.addEventListener("mousemove", alMoverMouse);
        return () => window.removeEventListener("mousemove", alMoverMouse);
    }, [reducirMovimiento, x, y]);

    if (reducirMovimiento) return null;

    return (
        <motion.div
            aria-hidden="true"
            className="pointer-events-none fixed top-0 left-0 -mt-48 -ml-48 hidden size-96 rounded-full opacity-15 blur-3xl md:block"
            style={{
                x: xSuave,
                y: ySuave,
                background:
                    "radial-gradient(circle, var(--primary) 0%, transparent 65%)",
            }}
        />
    );
}
