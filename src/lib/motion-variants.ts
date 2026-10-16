/**
 * Variants reutilizables de Motion para toda la animación del sitio.
 * El respeto a `prefers-reduced-motion` se resuelve de dos formas:
 * `<MotionConfig reducedMotion="user">` en el RootLayout (anula
 * transformaciones) y `useReducedMotion()` en los componentes
 * interactivos que deben apagarse por completo.
 * @module lib/motion-variants
 */
import type { Variants } from "motion/react";

/**
 * Entrada sutil desde abajo con fade. Duración 0.4s.
 */
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

/**
 * Aparición puramente por opacidad. Duración 0.3s.
 */
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
};

/**
 * Contenedor que espacia la aparición de sus hijos en 0.05s.
 * Usar junto a `staggerItem` en los hijos directos.
 */
export const staggerContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05 } },
};

/**
 * Hijo de un `staggerContainer`: entra con fade + slide corto.
 */
export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.35, ease: "easeOut" },
    },
};

/**
 * Configuración de hover con leve crecimiento. Combinar con spring
 * en el `transition` del componente si se desea rebote.
 */
export const scaleOnHover = {
    scale: 1.02,
} as const;

/**
 * Transición entre rutas: entra desde abajo, sale hacia arriba.
 * Pensada para `AnimatePresence mode="wait"`.
 */
export const pageTransition: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.35, ease: "easeOut" },
    },
    exit: {
        opacity: 0,
        y: -16,
        transition: { duration: 0.2, ease: "easeIn" },
    },
};

/**
 * Entrada deslizando desde la izquierda.
 */
export const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -24 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

/**
 * Entrada deslizando desde la derecha.
 */
export const slideInRight: Variants = {
    hidden: { opacity: 0, x: 24 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};
