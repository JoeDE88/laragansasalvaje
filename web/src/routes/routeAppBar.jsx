import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/BlogPage";
import EventosPage from "../pages/EventosPage";
import StorePage from "../pages/StorePage";
import WorksPage from "../pages/WorksPage";

export const routeAppBar = [
    {
        name: "Obras",
        path: "/obras",
        component: <WorksPage />
    },
    {
        name: "Store",
        path: "/store",
        component: <StorePage />
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