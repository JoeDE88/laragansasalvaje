import DashboardPubs from "../components/admin/Publicaciones/DashboardPubs"
import DashboardEventos from "../components/admin/Eventos/DashboardEventos"
import DashboardObras from "../components/admin/Obras/DashboardObras"
import DashboardProductos from "../components/admin/Tienda/DashboardProductos"


export const dashboardRoutes = [
    {
        'name': 'Publicaciones',
        'path': '/dashboard/lista-blog',
        'component': <DashboardPubs/>
    },
    {
        'name': 'Eventos',
        'path': '/dashboard/lista-eventos',
        'component': <DashboardEventos/>
    },
    {
        'name': 'Obras',
        'path': '/dashboard/obras',
        'component': <DashboardObras/>
    },
    {
        'name': 'Productos',
        'path': '/dashboard/shop',
        'component': <DashboardProductos/>
    },
]