/**
 * Hook genérico para registrar atajos de teclado globales.
 * Soporta la tecla "mod" (Cmd en macOS, Ctrl en el resto).
 * @module hooks/use-keyboard-shortcut
 */
import { useEffect } from "react";

/**
 * Opciones adicionales del atajo.
 */
interface OpcionesAtajo {
    /**
     * Ignora el atajo cuando el foco está en un input, textarea o
     * elemento editable. Por defecto es true.
     */
    ignorarEnInputs?: boolean;
}

/** Detecta macOS una sola vez para resolver la tecla "mod". */
const ES_MAC =
    typeof navigator !== "undefined" &&
    /mac|iphone|ipad|ipod/i.test(navigator.userAgent);

/**
 * Indica si el evento de teclado cumple toda la combinación pedida.
 *
 * @param evento - Evento keydown del navegador
 * @param teclas - Tokens: "mod", "ctrl", "meta", "shift", "alt" o una letra
 * @returns true si todas las teclas de la combinación coinciden
 */
function coincide(evento: KeyboardEvent, teclas: readonly string[]): boolean {
    return teclas.every((tecla) => {
        switch (tecla) {
            case "mod":
                return ES_MAC ? evento.metaKey : evento.ctrlKey;
            case "ctrl":
                return evento.ctrlKey;
            case "meta":
            case "cmd":
                return evento.metaKey;
            case "shift":
                return evento.shiftKey;
            case "alt":
                return evento.altKey;
            default:
                return evento.key.toLowerCase() === tecla;
        }
    });
}

/**
 * Registra un atajo de teclado mientras el componente esté montado.
 *
 * @param teclas - Combinación, p. ej. `["mod", "k"]`
 * @param handler - Callback al presionar la combinación
 * @param opciones - Opciones adicionales del atajo
 *
 * @example
 * useKeyboardShortcut(["mod", "k"], abrirBuscador);
 */
export function useKeyboardShortcut(
    teclas: readonly string[],
    handler: () => void,
    opciones?: OpcionesAtajo,
): void {
    const ignorarEnInputs = opciones?.ignorarEnInputs ?? true;

    useEffect(() => {
        const alPresionar = (evento: KeyboardEvent) => {
            const destino = evento.target;
            const enInput =
                destino instanceof HTMLElement &&
                (destino.tagName === "INPUT" ||
                    destino.tagName === "TEXTAREA" ||
                    destino.isContentEditable);

            if (ignorarEnInputs && enInput) return;
            if (!coincide(evento, teclas)) return;

            evento.preventDefault();
            handler();
        };

        window.addEventListener("keydown", alPresionar);
        return () => window.removeEventListener("keydown", alPresionar);
    }, [teclas, handler, ignorarEnInputs]);
}
