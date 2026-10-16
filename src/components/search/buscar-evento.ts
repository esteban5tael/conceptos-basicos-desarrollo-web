/**
 * Evento custom que abre el buscador global desde cualquier
 * componente, opcionalmente con una consulta prellenada.
 * @module components/search/buscar-evento
 */

/** Nombre del evento custom que abre el buscador. */
export const EVENTO_ABRIR_BUSQUEDA = "conceptos-web:abrir-busqueda";

/**
 * Abre el buscador global, opcionalmente con una consulta prellenada.
 *
 * @param consulta - Texto inicial del input de búsqueda
 */
export function abrirBusqueda(consulta?: string): void {
    window.dispatchEvent(
        new CustomEvent(EVENTO_ABRIR_BUSQUEDA, { detail: { consulta } }),
    );
}
