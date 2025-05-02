import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/Blog/BlogPage";
import EventosPage from "../pages/EventosPage";
import WorksPage from "../pages/Obras/WorksPage";
import ShopPage from "../pages/Shop/ShopPage";

export const routeAppBar = [
    {
        name: "Works",
        path: "/works",
        component: <WorksPage/>
    },
    {
        name: "Shop",
        path: "/shop",
        component: <ShopPage />
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
    },
    {
        name: "About",
        path: "/about",
        component: <AboutPage />
    }
]