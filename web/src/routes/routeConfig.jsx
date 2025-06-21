import AboutPage from "../pages/About/AboutPage";
import BlogPage from "../pages/Blog/BlogPage";
import HomePage from "../pages/Utiles/HomePage";
import GaleriaPage from "../pages/Galeria/GaleriaPage";
import NotFound from "../pages/Utiles/NotFound";
import PrivacidadPage from "../pages/Legal/PrivacidadPage";
import CookiesPage from "../pages/Legal/CookiesPage";
import TerminosCondicionesPage from "../pages/Legal/TerminosCondicionesPage";
import CategoriaPage from "../pages/Galeria/CategoriaPage";
import PublicacionPage from "../pages/Blog/PublicacionPage";
import DashBoard from "../pages/Admin/DashBoard";
import LoginPage from "../pages/Admin/LoginPage";
import EventosPage from "../pages/Eventos/EventosPage";

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
        component: <CategoriaPage />
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
        component: <PublicacionPage />
    },
    {
        name: "Eventos",
        path: "/eventos",
        component: <EventosPage />
    },
    {
        name: 'Login',
        path: '/login',
        component: <LoginPage/>
    }
    ,
    {
        name: 'Politica de Privacidad',
        path: '/politica-de-privacidad',
        component: <PrivacidadPage></PrivacidadPage>
    }
    ,
    {
        name: 'Politica de Cookies',
        path: '/politica-de-cookies',
        component: <CookiesPage></CookiesPage>
    }
    ,
    {
        name: 'Terminos y condiciones',
        path: '/terminos-y-condiciones',
        component: <TerminosCondicionesPage></TerminosCondicionesPage>
    }
    ,
    {
        name: "NotFound",
        path: "*",
        component: <NotFound />
    }
]

export const privateRoutes = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        component: <DashBoard/>
    },
    /* {
        'name': 'Publicaciones',
        'path': '/blog',
        'component': <ListaPublicaciones/>
    },
    {
        'name': 'Eventos',
        'path': '/eventos',
        'component': <Eventos></Eventos>
    },
    {
        'name': 'Obras',
        'path': '/galeria',
        'component': <Obras></Obras>
    },
    {
        'name': 'Productos',
        'path': '/shop',
        'component': <Productos></Productos>
    }, */
]