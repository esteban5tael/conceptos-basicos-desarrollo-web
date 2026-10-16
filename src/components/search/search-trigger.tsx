/**
 * Botón que abre el buscador global (Cmd+K / Ctrl+K).
 * @module components/search/search-trigger
 */
import { RiSearchLine } from "@remixicon/react";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import { abrirBusqueda } from "@/components/search/buscar-evento";

/** Detecta macOS para mostrar la tecla correcta del atajo. */
const ES_MAC =
    typeof navigator !== "undefined" &&
    /mac|iphone|ipad|ipod/i.test(navigator.userAgent);

/**
 * Trigger del buscador global para el header y el home.
 */
export function SearchTrigger() {
    return (
        <Button
            variant="outline"
            onClick={() => abrirBusqueda()}
            aria-label="Abrir el buscador de conceptos"
            className="gap-2 text-muted-foreground"
        >
            <RiSearchLine />
            <span className="hidden sm:inline">Buscar</span>
            <Kbd className="hidden sm:inline-flex">
                {ES_MAC ? "⌘" : "Ctrl"} K
            </Kbd>
        </Button>
    );
}
