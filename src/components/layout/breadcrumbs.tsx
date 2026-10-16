/**
 * Breadcrumbs automáticos generados a partir de la ruta actual.
 * Usa `useMatches` de react-router para leer el `handle.crumb` de
 * cada ruta y resuelve los nombres legibles desde la base de datos.
 * @module components/layout/breadcrumbs
 */
import { Fragment } from "react";
import { Link, useMatches } from "react-router";
import { motion } from "motion/react";
import { RiArrowRightSLine } from "@remixicon/react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { staggerItem } from "@/lib/motion-variants";
import { getConceptoBySlug, getNivelBySlug, niveles } from "@/data/database";

/**
 * Datos de `handle` definidos en la configuración de rutas.
 */
interface ManejoRuta {
    /** Etiqueta del breadcrumb para esa ruta */
    crumb?: string;
}

/**
 * Match de `useMatches` con el shape que usa esta aplicación.
 */
interface MatchRuta {
    /** ID único del match */
    id: string;
    /** Ruta parcial que coincidió */
    pathname: string;
    /** Parámetros dinámicos extraídos de la URL */
    params: Record<string, string | undefined>;
    /** Datos de handle de la ruta */
    handle?: ManejoRuta;
}

/**
 * Entrada visible del breadcrumb.
 */
interface ItemBreadcrumb {
    /** Nombre legible del nivel */
    nombre: string;
    /** Ruta enlazable; ausente en la página actual */
    ruta?: string;
}

/**
 * Construye la cadena de breadcrumbs para los matches actuales.
 *
 * Inserta el nivel intermedio cuando la página es de un concepto
 * (Inicio → Nivel → Concepto) y marca el último item como actual.
 *
 * @param matches - Matches activos del router
 * @returns Lista de items con nombre y ruta opcional
 */
function construirItems(matches: MatchRuta[]): ItemBreadcrumb[] {
    const items: ItemBreadcrumb[] = [{ nombre: "Inicio", ruta: "/" }];

    for (const match of matches) {
        const crumb = match.handle?.crumb;
        // El index "/" ya está representado por "Inicio".
        if (!crumb || match.pathname === "/") continue;

        const slug = match.params.slug;
        const concepto = slug ? getConceptoBySlug(slug) : undefined;

        if (concepto) {
            const nivel = niveles.find((n) => n.id === concepto.nivelId);
            if (nivel) {
                items.push({
                    nombre: nivel.titulo,
                    ruta: `/nivel/${nivel.slug}`,
                });
            }
            items.push({ nombre: concepto.titulo });
            continue;
        }

        const nivel = slug ? getNivelBySlug(slug) : undefined;
        items.push({
            nombre: nivel?.titulo ?? crumb,
            ruta: nivel ? `/nivel/${nivel.slug}` : undefined,
        });
    }

    // El último item es la página actual: nunca lleva enlace.
    return items.map((item, indice) =>
        indice === items.length - 1
            ? { nombre: item.nombre }
            : item,
    );
}

/**
 * Cadena de navegación jerárquica de la página actual.
 * El último item usa `aria-current="page"` sin enlace.
 */
export function Breadcrumbs() {
    const matches = useMatches() as MatchRuta[];
    const items = construirItems(matches);

    // En home no hay nada que mostrar además de "Inicio".
    if (items.length <= 1) return null;

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {items.map((item, indice) => (
                    <Fragment key={item.nombre}>
                        {indice > 0 && (
                            <BreadcrumbSeparator>
                                <motion.span
                                    variants={staggerItem}
                                    initial="hidden"
                                    animate="visible"
                                    aria-hidden="true"
                                    className="inline-flex"
                                >
                                    <RiArrowRightSLine />
                                </motion.span>
                            </BreadcrumbSeparator>
                        )}
                        <motion.span
                            variants={staggerItem}
                            initial="hidden"
                            animate="visible"
                            className="inline-flex"
                        >
                            <BreadcrumbItem>
                                {item.ruta ? (
                                    <BreadcrumbLink
                                        render={<Link to={item.ruta} />}
                                    >
                                        {item.nombre}
                                    </BreadcrumbLink>
                                ) : (
                                    <BreadcrumbPage>
                                        {item.nombre}
                                    </BreadcrumbPage>
                                )}
                            </BreadcrumbItem>
                        </motion.span>
                    </Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
