/**
 * Contador numérico que anima de 0 al valor final cuando entra
 * en el viewport del usuario.
 * @module components/shared/animated-counter
 */
import { useEffect, useRef } from "react";
import {
    animate,
    motion,
    useInView,
    useMotionValue,
    useReducedMotion,
    useTransform,
} from "motion/react";

/**
 * Props del contador animado.
 */
interface AnimatedCounterProps {
    /** Valor final al que anima el contador */
    valor: number;
    /** Texto antes del número (p. ej. "+") */
    prefijo?: string;
    /** Texto después del número (p. ej. "%") */
    sufijo?: string;
    /** Clases CSS adicionales */
    className?: string;
}

/**
 * Muestra un número que sube desde 0 al entrar en pantalla.
 * Con `prefers-reduced-motion` muestra el valor directo, sin animar.
 */
export function AnimatedCounter({
    valor,
    prefijo = "",
    sufijo = "",
    className,
}: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const enVista = useInView(ref, { once: true, amount: 0.5 });
    const motionValue = useMotionValue(0);
    const redondeado = useTransform(motionValue, (v) => Math.round(v));
    const reducirMovimiento = useReducedMotion();

    useEffect(() => {
        if (reducirMovimiento) {
            motionValue.set(valor);
            return;
        }
        if (enVista) {
            const controls = animate(motionValue, valor, {
                duration: 1.4,
                ease: "easeOut",
            });
            return () => controls.stop();
        }
    }, [enVista, valor, motionValue, reducirMovimiento]);

    if (reducirMovimiento) {
        return (
            <span ref={ref} className={className}>
                {prefijo}
                {valor}
                {sufijo}
            </span>
        );
    }

    return (
        <span ref={ref} className={className}>
            {prefijo}
            <motion.span>{redondeado}</motion.span>
            {sufijo}
        </span>
    );
}
