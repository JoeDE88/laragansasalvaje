import DashboardPubs from "../components/admin/Publicaciones/DashboardPubs"
import DashboardEventos from "../components/admin/Eventos/DashboardEventos"
import DashboardObras from "../components/admin/Obras/DashboardObras"
import DashBoardProductos from "../components/admin/Tienda/DashBoardProductos"


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
        'path': '/dashboard/lista-obras',
        'component': <DashboardObras/>
    },
    {
        'name': 'Productos',
        'path': '/dashboard/lista-productos',
        'component': <DashBoardProductos/>
    },
]