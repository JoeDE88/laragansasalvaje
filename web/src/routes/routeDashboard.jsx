import Obras from "../components/admin/Obras/Obras"
import Productos from "../components/admin/Tienda/Productos"
import DashboardPubs from "../components/admin/Publicaciones/DashboardPubs"
import DashboardEventos from "../components/admin/Eventos/DashboardEventos"

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
        'component': <Obras/>
    },
    {
        'name': 'Productos',
        'path': '/dashboard/shop',
        'component': <Productos/>
    },
]