/**
 * Página de inicio: hero animado, estadísticas, grid de niveles
 * y acceso a un concepto aleatorio.
 * @module pages/home
 */
import { useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import { RiArrowRightLine, RiSearchLine, RiShuffleLine } from "@remixicon/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { NivelCard } from "@/components/nivel/nivel-card";
import { abrirBusqueda } from "@/components/search/buscar-evento";
import { useProgress } from "@/hooks/use-progress";
import {
    fadeInUp,
    staggerContainer,
    staggerItem,
} from "@/lib/motion-variants";
import { setSEO, NOMBRE_SITIO } from "@/lib/seo";
import { conceptos, niveles } from "@/data/database";

/** Palabras del título del hero, animadas una a una. */
const PALABRAS_TITULO = "Conceptos Básicos de Desarrollo Web".split(" ");

/**
 * Página de inicio del glosario.
 */
export function Home() {
    const navigate = useNavigate();
    const { progresoGlobal } = useProgress();
    const { leidos } = progresoGlobal();

    useEffect(() => {
        setSEO({
            title: `Inicio · ${NOMBRE_SITIO}`,
            description:
                "200 conceptos fundamentales de desarrollo web explicados con ejemplos reales y analogías cotidianas.",
        });
    }, []);

    /** Navega a un concepto elegido al azar del glosario. */
    const irAConceptoAleatorio = useCallback(() => {
        const indice = Math.floor(Math.random() * conceptos.length);
        const concepto = conceptos[indice];
        if (concepto) navigate(`/concepto/${concepto.slug}`);
    }, [navigate]);

    return (
        <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 py-12 sm:px-6 lg:px-8">
            {/* Hero */}
            <section className="flex flex-col items-center gap-6 text-center">
                <motion.img
                    src="/logo.webp"
                    alt="Logo del glosario de conceptos de desarrollo web"
                    width={96}
                    height={96}
                    className="size-24 rounded-3xl"
                    initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: [0, 360],
                        transition: {
                            opacity: { duration: 0.6, ease: "easeOut" },
                            scale: { duration: 0.6, ease: "easeOut" },
                            rotate: {
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear",
                            },
                        },
                    }}
                />
                <motion.h1
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="max-w-3xl font-heading text-3xl font-bold text-balance sm:text-5xl"
                >
                    {PALABRAS_TITULO.map((palabra, indice) => (
                        <motion.span
                            key={`${palabra}-${indice}`}
                            variants={staggerItem}
                            className="inline-block"
                        >
                            {palabra}&nbsp;
                        </motion.span>
                    ))}
                </motion.h1>
                <motion.p
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    className="max-w-2xl text-sm text-muted-foreground sm:text-base"
                >
                    200 conceptos fundamentales explicados con ejemplos
                    reales y analogías cotidianas.
                </motion.p>
                <motion.div variants={fadeInUp} initial="hidden" animate="visible">
                    <Badge variant="secondary" className="px-3 py-1 text-xs">
                        Ficha 3534665 · Técnico en Programación de Software ·
                        Jornada Noche
                    </Badge>
                </motion.div>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-wrap items-center justify-center gap-3"
                >
                    <MagneticButton>
                        <Button
                            size="lg"
                            render={
                                <Link to={`/nivel/${niveles[0].slug}`} />
                            }
                            className="gap-1.5"
                        >
                            Empezar por el Nivel 1
                            <RiArrowRightLine />
                        </Button>
                    </MagneticButton>
                    <MagneticButton>
                        <Button
                            variant="outline"
                            size="lg"
                            className="gap-1.5"
                            onClick={() => abrirBusqueda()}
                        >
                            <RiSearchLine />
                            Buscar concepto
                        </Button>
                    </MagneticButton>
                </motion.div>
            </section>

            {/* Estadísticas animadas */}
            <section
                className="grid grid-cols-1 gap-4 sm:grid-cols-3"
                aria-label="Estadísticas del glosario"
            >
                <DatoStat titulo="Conceptos" valor={conceptos.length} />
                <DatoStat titulo="Niveles" valor={niveles.length} />
                <DatoStat titulo="Leídos por ti" valor={leidos} />
            </section>

            {/* Grid de niveles */}
            <section className="flex flex-col gap-6">
                <h2 className="font-heading text-xl font-semibold sm:text-2xl">
                    Niveles del glosario
                </h2>
                <motion.ul
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
                >
                    {niveles.map((nivel) => (
                        <NivelCard key={nivel.id} nivel={nivel} />
                    ))}
                </motion.ul>
            </section>

            {/* Concepto aleatorio */}
            <section className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card/50 px-6 py-10 text-center">
                <h2 className="font-heading text-lg font-semibold">
                    ¿Sin idea por dónde empezar?
                </h2>
                <p className="max-w-md text-sm text-muted-foreground">
                    Deja que el azar te lleve a uno de los 200 conceptos del
                    glosario.
                </p>
                <MagneticButton>
                    <Button
                        variant="secondary"
                        size="lg"
                        className="group gap-1.5"
                        onClick={irAConceptoAleatorio}
                    >
                        <RiShuffleLine className="transition-transform duration-300 group-hover:rotate-180" />
                        Concepto aleatorio
                    </Button>
                </MagneticButton>
            </section>
        </div>
    );
}

/**
 * Props de una estadística del hero.
 */
interface DatoStatProps {
    /** Etiqueta de la estadística */
    titulo: string;
    /** Valor numérico animado */
    valor: number;
}

/**
 * Estadística con contador animado al entrar en viewport.
 */
function DatoStat({ titulo, valor }: DatoStatProps) {
    return (
        <div className="flex flex-col items-center gap-1 rounded-2xl border border-border bg-card/50 px-6 py-8">
            <AnimatedCounter
                valor={valor}
                className="font-heading text-4xl font-bold text-primary"
            />
            <p className="text-sm text-muted-foreground">{titulo}</p>
        </div>
    );
}
