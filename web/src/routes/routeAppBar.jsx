import AboutPage from "../pages/About/AboutPage";
import LoginPage from "../pages/Admin/LoginPage";
import BlogPage from "../pages/Blog/BlogPage";
import EventosPage from "../pages/Eventos/EventosPage";
import GaleriaPage from "../pages/Galeria/GaleriaPage";
// import ShopPage from "../pages/Shop/ShopPage";

export const routeAppBar = [
    {
        name: "Galeria",
        path: "/galeria",
        component: <GaleriaPage />
    },
    /* {
        name: "Tienda",
        path: "/tienda",
        component: <ShopPage />
    }, */
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
    },
    {
        name: "Área privada",
        path: "/login",
        component:<LoginPage/>
    }
]