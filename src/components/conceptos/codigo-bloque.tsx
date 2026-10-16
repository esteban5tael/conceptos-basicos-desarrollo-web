/**
 * Bloque de código con resaltado real vía Shiki y botón de copiar.
 * @module components/conceptos/codigo-bloque
 */
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { RiCheckLine, RiFileCopyLine } from "@remixicon/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { resaltarCodigo } from "@/lib/shiki";
import { cn } from "cn";

/** Milisegundos que dura el feedback visual de "Copiado". */
const DURACION_COPIADO = 2000;

/**
 * Props del bloque de código.
 */
interface CodigoBloqueProps {
    /** Código crudo a mostrar y resaltar */
    codigo: string;
    /** Lenguaje del bloque (html, css, javascript, etc.) */
    lenguaje: string;
    /** Clases CSS adicionales del contenedor */
    className?: string;
}

/**
 * Estado del resaltado: asocia el HTML al par código/lenguaje para
 * no resetear el bloque de forma síncrona al cambiar los props.
 */
interface EstadoResaltado {
    /** Par código/lenguaje al que pertenece el HTML */
    clave: string;
    /** HTML generado por Shiki, o null si aún no está listo */
    html: string | null;
}

/**
 * Renderiza un bloque de código resaltado con Shiki.
 * Mientras el highlighter carga muestra un skeleton; el botón
 * "Copiar" usa el portapapeles con feedback por toast.
 */
export function CodigoBloque({
    codigo,
    lenguaje,
    className,
}: CodigoBloqueProps) {
    const clave = `${lenguaje}:${codigo}`;
    const [estado, setEstado] = useState<EstadoResaltado>({
        clave: "",
        html: null,
    });
    const [copiado, setCopiado] = useState(false);

    // Solo muestra el HTML si corresponde al código actual.
    const html = estado.clave === clave ? estado.html : null;

    // Resalta el código de forma asíncrona al montar/cambiar.
    useEffect(() => {
        let vigente = true;

        resaltarCodigo(codigo, lenguaje)
            .then((generado) => {
                if (vigente) setEstado({ clave, html: generado });
            })
            .catch((error) => {
                console.error("[CodigoBloque]", error);
            });

        return () => {
            vigente = false;
        };
    }, [codigo, lenguaje, clave]);

    /** Copia el código crudo al portapapeles con feedback. */
    const alCopiar = async () => {
        try {
            await navigator.clipboard.writeText(codigo);
            setCopiado(true);
            toast.success("Código copiado al portapapeles");
            window.setTimeout(
                () => setCopiado(false),
                DURACION_COPIADO,
            );
        } catch (error) {
            console.error("[CodigoBloque]", error);
            toast.error("No se pudo copiar el código");
        }
    };

    return (
        <figure
            className={cn(
                "overflow-hidden rounded-xl border border-border bg-card",
                className,
            )}
        >
            <figcaption className="flex items-center justify-between gap-2 border-b border-border px-4 py-2">
                <Badge variant="secondary" className="font-mono uppercase">
                    {lenguaje}
                </Badge>
                <Button
                    variant="ghost"
                    size="xs"
                    onClick={alCopiar}
                    aria-label="Copiar código al portapapeles"
                    className="gap-1 text-muted-foreground"
                >
                    {copiado ? (
                        <RiCheckLine className="text-primary" />
                    ) : (
                        <RiFileCopyLine />
                    )}
                    {copiado ? "Copiado" : "Copiar"}
                </Button>
            </figcaption>
            {html ? (
                <div
                    className="overflow-x-auto [&_pre]:m-0 [&_pre]:p-4 [&_pre]:text-sm [&_code]:font-mono"
                    // HTML seguro: lo genera Shiki desde texto plano.
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            ) : (
                <Skeleton className="m-4 h-40 rounded-lg" aria-hidden="true" />
            )}
        </figure>
    );
}
