/**
 * Página 404 animada para rutas inexistentes.
 * @module pages/not-found
 */
import { Link } from "react-router";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { useDocumentTitle } from "@/hooks/use-document-title";

/**
 * Animación de shake suave en bucle para el número 404.
 * Con `prefers-reduced-motion` queda estática.
 */
const ANIMACION_SHAKE = {
    x: [0, -8, 8, -6, 6, -3, 3, 0],
    transition: { duration: 0.6, repeat: Infinity, repeatDelay: 2.4 },
};

/**
 * Página de error 404 con animación y vuelta al inicio.
 */
export function NotFound() {
    useDocumentTitle("Página no encontrada");

    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
            <motion.p
                animate={ANIMACION_SHAKE}
                className="font-heading text-7xl font-bold text-primary sm:text-8xl"
                aria-hidden="true"
            >
                404
            </motion.p>
            <h1 className="font-heading text-2xl font-semibold text-balance">
                Este concepto no existe... todavía.
            </h1>
            <p className="max-w-md text-sm text-muted-foreground">
                La página que buscas no forma parte del glosario. Puede que el
                enlace esté mal escrito o que el concepto aún no exista.
            </p>
            <MagneticButton>
                <Button size="lg" render={<Link to="/" />}>
                    Volver al inicio
                </Button>
            </MagneticButton>
        </div>
    );
}
