/**
 * Acciones del concepto: marcar como leído, copiar enlace
 * y volver al nivel que lo contiene.
 * @module components/conceptos/concepto-acciones
 */
import { Link } from "react-router";
import { toast } from "sonner";
import {
    RiArrowGoBackLine,
    RiCheckboxCircleLine,
    RiLink,
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import { useProgress } from "@/hooks/use-progress";

/**
 * Props de las acciones del concepto.
 */
interface ConceptoAccionesProps {
    /** ID del concepto a marcar/desmarcar */
    conceptoId: number;
    /** Slug del nivel al que pertenece el concepto */
    nivelSlug: string;
    /** Título del concepto, usado en los mensajes de toast */
    tituloConcepto: string;
}

/**
 * Botones de acción sobre el concepto actual.
 */
export function ConceptoAcciones({
    conceptoId,
    nivelSlug,
    tituloConcepto,
}: ConceptoAccionesProps) {
    const { isLeido, toggleLeido } = useProgress();
    const leido = isLeido(conceptoId);

    /** Alterna el estado de leído con feedback por toast. */
    const alAlternarLeido = () => {
        toggleLeido(conceptoId);
        toast.success(
            leido
                ? `«${tituloConcepto}» marcado como pendiente`
                : `«${tituloConcepto}» marcado como leído`,
        );
    };

    /** Copia la URL actual al portapapeles. */
    const alCopiarLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            toast.success("Enlace del concepto copiado");
        } catch (error) {
            console.error("[ConceptoAcciones]", error);
            toast.error("No se pudo copiar el enlace");
        }
    };

    return (
        <div className="flex flex-wrap items-center gap-2">
            <Button
                variant={leido ? "secondary" : "default"}
                onClick={alAlternarLeido}
                aria-pressed={leido}
                className="gap-1.5"
            >
                <RiCheckboxCircleLine />
                {leido ? "Desmarcar" : "Marcar como leído"}
            </Button>
            <Button
                variant="outline"
                onClick={alCopiarLink}
                className="gap-1.5"
            >
                <RiLink />
                Copiar link
            </Button>
            <Button
                variant="ghost"
                render={<Link to={`/nivel/${nivelSlug}`} />}
                className="gap-1.5 text-muted-foreground"
            >
                <RiArrowGoBackLine />
                Volver al nivel
            </Button>
        </div>
    );
}
