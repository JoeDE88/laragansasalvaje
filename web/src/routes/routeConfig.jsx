import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/Blog/BlogPage";
import EventosPage from "../pages/EventosPage";
import HomePage from "../pages/HomePage";
import WorksPage from "../pages/Obras/WorksPage";
import ShopPage from "../pages/Shop/ShopPage";

export const routeConfig = [
    {
        name: "Homepage",
        path: "/",
        component: <HomePage />
    },
    {
        name: "Obras",
        path: "/obras",
        component: <WorksPage/>
    },
    {
        name: "Tienda",
        path: "/tienda",
        component: <ShopPage/>
    },
    {
        name: "Acerca de",
        path: "/acerca-de",
        component: <AboutPage />
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
    }
]