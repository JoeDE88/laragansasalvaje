import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/Blog/BlogPage";
import EventosPage from "../pages/EventosPage";
import HomePage from "../pages/HomePage";
import GaleriaPage from "../pages/Galeria/GaleriaPage";
import ShopPage from "../pages/Shop/ShopPage";
import NotFound from "../pages/NotFound";
import LoginPage from "../pages/LoginPage";

export const routeConfig = [
    {
        name: "Homepage",
        path: "/",
        component: <HomePage />
    },
    {
        name: "Galeria",
        path: "/galeria",
        component: <GaleriaPage />
    },
     {
        name: "Tienda",
        path: "/tienda",
        component: <ShopPage />
    } ,
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
    },
    {
        name: 'Login',
        path: '/login',
        component : <LoginPage></LoginPage>
    }
    ,
    {
        name: "NotFound",
        path: "*",
        component: <NotFound/>
    }
]