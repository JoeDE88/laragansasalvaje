import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/Blog/BlogPage";
import EventosPage from "../pages/EventosPage";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import WorksPage from "../pages/WorksPage";

export const routeConfig = [
    {
        name: "Homepage",
        path: "/",
        component: <HomePage />
    },
    {
        name: "Works",
        path: "/works",
        component: <WorksPage />
    },
    {
        name: "Shop",
        path: "/shop",
        component: <ShopPage/>
    },
    {
        name: "About",
        path: "/about",
        component: <AboutPage />
    },
    {
        name: "Blog",
        path: "/blog",
        component: <BlogPage />
    },
    {
        name: "Eventos",
        path: "/eventos",
        component: <EventosPage />
    }
]