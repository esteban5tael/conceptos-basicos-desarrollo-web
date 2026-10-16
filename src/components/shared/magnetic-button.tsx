/**
 * Botón magnético: el contenido se desplaza sutilmente hacia el
 * cursor cuando este se acerca, con un máximo de 10 píxeles.
 * @module components/shared/magnetic-button
 */
import { useRef } from "react";
import {
    motion,
    useMotionValue,
    useReducedMotion,
    useSpring,
} from "motion/react";
import type { MouseEvent, ReactNode } from "react";
import { cn } from "cn";

/** Desplazamiento máximo del botón magnético en píxeles. */
const DESPLAZAMIENTO_MAXIMO = 10;

/** Fuerza con la que el botón sigue al cursor. */
const FACTOR_SEGUIMIENTO = 0.3;

/** Rigidez del resorte que suaviza el movimiento. */
const RIGIDEZ = 250;

/** Amortiguación del resorte que suaviza el movimiento. */
const AMORTIGUACION = 18;

/**
 * Props del botón magnético.
 */
interface MagneticButtonProps {
    /** Contenido del botón (puede ser un Botón o Link de router) */
    children: ReactNode;
    /** Clases CSS adicionales del wrapper */
    className?: string;
}

/**
 * Limita un valor dentro de un rango.
 *
 * @param valor - Valor a limitar
 * @param minimo - Límite inferior
 * @param maximo - Límite superior
 * @returns Valor dentro del rango
 */
function limitar(valor: number, minimo: number, maximo: number): number {
    return Math.min(Math.max(valor, minimo), maximo);
}

/**
 * Wrapper que añade un efecto magnético sutil a su contenido.
 * Con `prefers-reduced-motion` permanece completamente estático.
 */
export function MagneticButton({
    children,
    className,
}: MagneticButtonProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const xSuave = useSpring(x, {
        stiffness: RIGIDEZ,
        damping: AMORTIGUACION,
    });
    const ySuave = useSpring(y, {
        stiffness: RIGIDEZ,
        damping: AMORTIGUACION,
    });
    const reducirMovimiento = useReducedMotion();

    /** Acerca el contenido al cursor, proporcional a la distancia. */
    const alMoverMouse = (evento: MouseEvent<HTMLSpanElement>) => {
        if (reducirMovimiento || !ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centroX = rect.left + rect.width / 2;
        const centroY = rect.top + rect.height / 2;
        const desplazamientoX = (evento.clientX - centroX) * FACTOR_SEGUIMIENTO;
        const desplazamientoY = (evento.clientY - centroY) * FACTOR_SEGUIMIENTO;

        x.set(
            limitar(
                desplazamientoX,
                -DESPLAZAMIENTO_MAXIMO,
                DESPLAZAMIENTO_MAXIMO,
            ),
        );
        y.set(
            limitar(
                desplazamientoY,
                -DESPLAZAMIENTO_MAXIMO,
                DESPLAZAMIENTO_MAXIMO,
            ),
        );
    };

    /** Devuelve el contenido al centro al perder el cursor. */
    const alSalirMouse = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.span
            ref={ref}
            className={cn("inline-block", className)}
            style={{ x: xSuave, y: ySuave }}
            onMouseMove={alMoverMouse}
            onMouseLeave={alSalirMouse}
        >
            {children}
        </motion.span>
    );
}
