/**
 * Buscador global con palette de comandos (Cmd+K / Ctrl+K).
 * Filtra los 200 conceptos por título, definición y tags.
 * @module components/search/search-command
 */
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { useKeyboardShortcut } from "@/hooks/use-keyboard-shortcut";
import { EVENTO_ABRIR_BUSQUEDA } from "@/components/search/buscar-evento";
import { buscarConceptos, niveles } from "@/data/database";

/** Cantidad máxima de resultados mostrados en la palette. */
const LIMITE_RESULTADOS = 30;

/**
 * Palette de comandos montada globalmente en el RootLayout.
 * Se abre con Cmd+K / Ctrl+K o con el evento `abrirBusqueda`.
 */
export function SearchCommand() {
    const navigate = useNavigate();
    const [abierto, setAbierto] = useState(false);
    const [consulta, setConsulta] = useState("");

    /** Mapa de niveles por id para mostrar color y nombre. */
    const nivelesPorId = useMemo(
        () => new Map(niveles.map((nivel) => [nivel.id, nivel])),
        [],
    );

    /** Resultados filtrados por la consulta actual. */
    const resultados = useMemo(() => {
        const texto = consulta.trim();
        if (!texto) return [];
        return buscarConceptos(texto).slice(0, LIMITE_RESULTADOS);
    }, [consulta]);

    /** Alterna la palette con Cmd+K / Ctrl+K (incluso en inputs). */
    const alternar = useCallback(() => setAbierto((prev) => !prev), []);

    useKeyboardShortcut(["mod", "k"], alternar, { ignorarEnInputs: false });

    // Escucha las peticiones de apertura desde otros componentes.
    useEffect(() => {
        const alAbrir = (evento: Event) => {
            const detalle = (evento as CustomEvent<{ consulta?: string }>)
                .detail;
            setConsulta(detalle?.consulta ?? "");
            setAbierto(true);
        };
        window.addEventListener(EVENTO_ABRIR_BUSQUEDA, alAbrir);
        return () => window.removeEventListener(EVENTO_ABRIR_BUSQUEDA, alAbrir);
    }, []);

    /** Cierra la palette y limpia la consulta. */
    const alCerrar = useCallback((valor: boolean) => {
        setAbierto(valor);
        if (!valor) setConsulta("");
    }, []);

    /** Navega al concepto seleccionado y cierra la palette. */
    const alSeleccionar = useCallback(
        (slug: string) => {
            setAbierto(false);
            setConsulta("");
            navigate(`/concepto/${slug}`);
        },
        [navigate],
    );

    return (
        <CommandDialog
            open={abierto}
            onOpenChange={alCerrar}
            title="Buscar conceptos"
            description="Busca entre los 200 conceptos del glosario"
            className="max-w-xl"
        >
            <Command shouldFilter={false}>
                <CommandInput
                    value={consulta}
                    onValueChange={setConsulta}
                    placeholder="Escribe un concepto, tag o palabra clave..."
                    aria-label="Buscar conceptos"
                />
                <CommandList>
                    <CommandEmpty>
                        {consulta.trim()
                            ? "No se encontraron conceptos"
                            : "Escribe para buscar entre 200 conceptos"}
                    </CommandEmpty>
                    {resultados.length > 0 && (
                        <CommandGroup heading="Conceptos">
                            {resultados.map((concepto) => {
                                const nivel = nivelesPorId.get(
                                    concepto.nivelId,
                                );
                                return (
                                    <CommandItem
                                        key={concepto.id}
                                        value={`${concepto.id}-${concepto.slug}`}
                                        onSelect={() =>
                                            alSeleccionar(concepto.slug)
                                        }
                                    >
                                        <span className="tabular-nums text-muted-foreground">
                                            #
                                            {String(concepto.id).padStart(
                                                3,
                                                "0",
                                            )}
                                        </span>
                                        <span className="truncate">
                                            {concepto.titulo}
                                        </span>
                                        <span className="ml-auto flex shrink-0 items-center gap-1.5">
                                            <span
                                                className="size-2 rounded-full"
                                                style={{
                                                    backgroundColor:
                                                        nivel?.color,
                                                }}
                                                aria-hidden="true"
                                            />
                                            <span className="text-xs text-muted-foreground">
                                                {nivel?.titulo}
                                            </span>
                                        </span>
                                    </CommandItem>
                                );
                            })}
                        </CommandGroup>
                    )}
                </CommandList>
            </Command>
        </CommandDialog>
    );
}
