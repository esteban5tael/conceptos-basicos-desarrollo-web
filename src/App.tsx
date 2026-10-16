/**
 * Router principal de la aplicación con react-router en modo data.
 * Define el layout raíz y las rutas del glosario: home, niveles,
 * conceptos y 404.
 * @module App
 */
import { createBrowserRouter, RouterProvider } from "react-router";
import { RootLayout } from "@/components/layout/root-layout";
import { Home } from "@/pages/home";
import { NivelPage } from "@/pages/nivel-page";
import { ConceptoPage } from "@/pages/concepto-page";
import { ArquitecturaPage } from "@/pages/arquitectura-page";
import { NotFound } from "@/pages/not-found";

/**
 * Configuración de rutas. `handle.crumb` alimenta a los Breadcrumbs
 * generados con `useMatches`.
 */
const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
                handle: { crumb: "Inicio" },
            },
            {
                path: "nivel/:slug",
                element: <NivelPage />,
                handle: { crumb: "Nivel" },
            },
            {
                path: "concepto/:slug",
                element: <ConceptoPage />,
                handle: { crumb: "Concepto" },
            },
            {
                path: "arquitectura",
                element: <ArquitecturaPage />,
                handle: { crumb: "Arquitectura" },
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

/**
 * Componente raíz que monta el router de la aplicación.
 */
export default function App() {
    return <RouterProvider router={router} />;
}
