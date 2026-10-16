/**
 * Hook de progreso de lectura del glosario.
 * Persiste los IDs de conceptos leídos en localStorage y sincroniza
 * el estado entre pestañas mediante el evento `storage`.
 * @module hooks/use-progress
 */
import { useCallback, useEffect, useRef, useState } from "react";
import { conceptos, getConceptosByNivel } from "@/data/database";

/** Clave de almacenamiento del progreso en localStorage. */
const CLAVE_STORAGE = "conceptos-web:progreso";

/**
 * Formato persistido del progreso en localStorage.
 */
interface EstadoProgreso {
    /** IDs de los conceptos marcados como leídos */
    leidos: number[];
}

/**
 * Verifica en runtime que el valor leído del storage tenga el
 * formato esperado, evitando corromper el estado con datos ajenos.
 *
 * @param valor - Valor desconocido proveniente de JSON.parse
 * @returns true si es un EstadoProgreso válido
 */
function esEstadoValido(valor: unknown): valor is EstadoProgreso {
    if (typeof valor !== "object" || valor === null) return false;
    const posible = valor as EstadoProgreso;
    return (
        Array.isArray(posible.leidos) &&
        posible.leidos.every((id) => typeof id === "number")
    );
}

/**
 * Lee el progreso desde localStorage tolerando JSON corrupto.
 *
 * @returns Lista de IDs leídos (vacía si no hay datos válidos)
 */
function leerDisco(): number[] {
    try {
        const crudo = window.localStorage.getItem(CLAVE_STORAGE);
        if (!crudo) return [];
        const parsed: unknown = JSON.parse(crudo);
        return esEstadoValido(parsed) ? parsed.leidos : [];
    } catch {
        return [];
    }
}

/**
 * Progreso agregado de un conjunto de conceptos.
 */
interface ResumenProgreso {
    /** Cantidad de conceptos leídos */
    leidos: number;
    /** Cantidad total de conceptos del conjunto */
    total: number;
    /** Porcentaje redondeado de 0 a 100 */
    porcentaje: number;
}

/**
 * Calcula el progreso de una lista de conceptos contra los leídos.
 *
 * @param idsLeidos - Set con los IDs marcados como leídos
 * @param total - Total de conceptos del conjunto
 * @param idsDelConjunto - IDs de los conceptos del conjunto
 * @returns Resumen con leídos, total y porcentaje
 */
function calcularProgreso(
    idsLeidos: Set<number>,
    total: number,
    idsDelConjunto: readonly number[],
): ResumenProgreso {
    const leidosNivel = idsDelConjunto.filter((id) => idsLeidos.has(id)).length;
    return {
        leidos: leidosNivel,
        total,
        porcentaje: total === 0 ? 0 : Math.round((leidosNivel / total) * 100),
    };
}

/**
 * Hook con el progreso de lectura persistido en localStorage.
 *
 * @returns Estado y acciones del progreso, más los resúmenes
 * por nivel y global
 */
export function useProgress() {
    const [leidos, setLeidos] = useState<Set<number>>(
        () => new Set(leerDisco()),
    );

    /** Evita reescribir el storage al montar con el mismo dato. */
    const primeraEscritura = useRef(true);

    // Persiste el progreso en cada cambio (excepto al montar).
    useEffect(() => {
        if (primeraEscritura.current) {
            primeraEscritura.current = false;
            return;
        }
        window.localStorage.setItem(
            CLAVE_STORAGE,
            JSON.stringify({ leidos: [...leidos] }),
        );
    }, [leidos]);

    // Sincroniza cambios hechos en otras pestañas.
    useEffect(() => {
        const alCambiarStorage = (evento: StorageEvent) => {
            if (evento.key === CLAVE_STORAGE) setLeidos(new Set(leerDisco()));
        };
        window.addEventListener("storage", alCambiarStorage);
        return () => window.removeEventListener("storage", alCambiarStorage);
    }, []);

    /** Indica si un concepto está marcado como leído. */
    const isLeido = useCallback((id: number) => leidos.has(id), [leidos]);

    /** Marca un concepto como leído. */
    const marcarLeido = useCallback((id: number) => {
        setLeidos((prev) => {
            const nuevo = new Set(prev);
            nuevo.add(id);
            return nuevo;
        });
    }, []);

    /** Quita la marca de leído de un concepto. */
    const desmarcarLeido = useCallback((id: number) => {
        setLeidos((prev) => {
            const nuevo = new Set(prev);
            nuevo.delete(id);
            return nuevo;
        });
    }, []);

    /** Alterna el estado de leído de un concepto. */
    const toggleLeido = useCallback((id: number) => {
        setLeidos((prev) => {
            const nuevo = new Set(prev);
            if (nuevo.has(id)) nuevo.delete(id);
            else nuevo.add(id);
            return nuevo;
        });
    }, []);

    /** Borra todo el progreso guardado. */
    const resetProgreso = useCallback(() => setLeidos(new Set()), []);

    /** Resumen del progreso de un nivel. */
    const progresoNivel = useCallback(
        (nivelId: number): ResumenProgreso => {
            const delNivel = getConceptosByNivel(nivelId);
            return calcularProgreso(
                leidos,
                delNivel.length,
                delNivel.map((c) => c.id),
            );
        },
        [leidos],
    );

    /** Resumen del progreso del glosario completo. */
    const progresoGlobal = useCallback(
        (): ResumenProgreso =>
            calcularProgreso(
                leidos,
                conceptos.length,
                conceptos.map((c) => c.id),
            ),
        [leidos],
    );

    return {
        leidos,
        isLeido,
        marcarLeido,
        desmarcarLeido,
        toggleLeido,
        resetProgreso,
        progresoNivel,
        progresoGlobal,
    };
}
