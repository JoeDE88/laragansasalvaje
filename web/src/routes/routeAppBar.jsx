import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/Blog/BlogPage";
import EventosPage from "../pages/EventosPage";
import WorksPage from "../pages/Obras/WorksPage";
import ShopPage from "../pages/Shop/ShopPage";

export const routeAppBar = [
    {
        name: "Obras",
        path: "/obras",
        component: <WorksPage/>
    },
    {
        name: "Tienda",
        path: "/tienda",
        component: <ShopPage />
    },
    {
        name: "Mi Espacio",
        path: "/mi-espacio",
        component: <BlogPage />
    },
    {
        name: "Eventos",
        path: "/eventos",
        component: <EventosPage />
    },
    {
        name: "Acerca de",
        path: "/acerca-de",
        component: <AboutPage />
    }
]