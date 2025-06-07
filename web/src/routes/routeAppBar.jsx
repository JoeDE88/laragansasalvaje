import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/Blog/BlogPage";
import EventosPage from "../pages/EventosPage";
import GaleriaPage from "../pages/Galeria/GaleriaPage";
import LoginPage from "../pages/LoginPage";
import ShopPage from "../pages/Shop/ShopPage";

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
    } */,
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
        name: "Login",
        path: "/login",
        component: <LoginPage></LoginPage>
    }
]