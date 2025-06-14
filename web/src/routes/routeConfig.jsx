import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/Blog/BlogPage";
import EventosPage from "../pages/EventosPage";
import HomePage from "../pages/HomePage";
import GaleriaPage from "../pages/Galeria/GaleriaPage";
import ShopPage from "../pages/Shop/ShopPage";
import NotFound from "../pages/NotFound";
import LoginPage from "../pages/LoginPage";
import PrivacidadPage from "../pages/PrivacidadPage";
import CookiesPage from "../pages/CookiesPage";
import TerminosCondicionesPage from "../pages/TerminosCondicionesPage";
import ProductPage from "../pages/Shop/ProductPage";
import CategoriaPage from "../pages/Galeria/CategoriaPage";
import PublicacionPage from "../pages/Blog/PublicacionPage";
import ShopCartPage from "../pages/Shop/ShopCartPage";
import DashBoard from "../pages/DashBoard";

export const publicRoutes = [
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
        name: "Categorias",
        path: "/obras/:slug",
        component: <CategoriaPage/>
    },
    /* {
        name: "Tienda",
        path: "/tienda",
        component: <ShopPage />
    },
    {
        name: "producto",
        path: "/shop/:slug",
        component: <ProductPage/>
    },
    {
        name: "carrito",
        path: "/carrito",
        component: <ShopCartPage/>
    } */,
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
        name: "Publicaciones",
        path: "/blog/publicaciones/:slug",
        component: <PublicacionPage/>
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
        name: 'Politica de Privacidad',
        path: '/politica-de-privacidad',
        component : <PrivacidadPage></PrivacidadPage>
    }
    ,
    {
        name: 'Politica de Cookies',
        path: '/politica-de-cookies',
        component : <CookiesPage></CookiesPage>
    }
    ,
    {
        name: 'Terminos y condiciones',
        path: '/terminos-y-condiciones',
        component : <TerminosCondicionesPage></TerminosCondicionesPage>
    }
    ,
    {
        name: "NotFound",
        path: "*",
        component: <NotFound/>
    }
]

export const privateRoutes = [
     {
        name: 'Dashboard',
        path: '/dashboard',
        component : <DashBoard></DashBoard>
    },
    {
        name: 'Obras',
        path: '/obras',
        component : <DashBoard></DashBoard>
    }
]