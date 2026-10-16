/**
 * Chips de tags del concepto. Al pulsar uno se abre el buscador
 * global con ese tag como consulta inicial.
 * @module components/conceptos/concepto-tags
 */
import { Badge } from "@/components/ui/badge";
import { abrirBusqueda } from "@/components/search/buscar-evento";

/**
 * Props de los tags del concepto.
 */
interface ConceptoTagsProps {
    /** Lista de etiquetas kebab-case del concepto */
    tags: readonly string[];
}

/**
 * Lista de tags clickeables que abren el buscador prellenado.
 */
export function ConceptoTags({ tags }: ConceptoTagsProps) {
    if (tags.length === 0) return null;

    return (
        <ul
            className="flex flex-wrap gap-2"
            aria-label="Etiquetas del concepto"
        >
            {tags.map((tag) => (
                <li key={tag}>
                    <button
                        type="button"
                        onClick={() => abrirBusqueda(tag)}
                        aria-label={`Buscar conceptos con el tag ${tag}`}
                        className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                        <Badge
                            variant="outline"
                            className="cursor-pointer text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                        >
                            #{tag}
                        </Badge>
                    </button>
                </li>
            ))}
        </ul>
    );
}
