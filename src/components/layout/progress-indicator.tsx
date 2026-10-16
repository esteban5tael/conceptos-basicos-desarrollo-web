/**
 * Indicador compacto del progreso global de lectura del glosario.
 * @module components/layout/progress-indicator
 */
import { Progress } from "@/components/ui/progress";
import { useProgress } from "@/hooks/use-progress";

/**
 * Barra de progreso global (leídos / total) para el header.
 */
export function ProgressIndicator() {
    const { progresoGlobal } = useProgress();
    const { leidos, total, porcentaje } = progresoGlobal();

    return (
        <div
            className="hidden items-center gap-2 lg:flex"
            role="status"
            aria-label={`Progreso global: ${leidos} de ${total} conceptos leídos, ${porcentaje} por ciento`}
        >
            <Progress value={porcentaje} className="w-20" />
            <span className="text-xs tabular-nums text-muted-foreground">
                {porcentaje}%
            </span>
        </div>
    );
}
