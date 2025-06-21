
import Eventos from "../components/admin/Eventos/Eventos"
import Obras from "../components/admin/Obras/Obras"
import Productos from "../components/admin/Tienda/Productos"
import DashboardPubs from "../components/admin/Publicaciones/DashboardPubs"

export const dashboardRoutes = [
    {
        'name': 'Publicaciones',
        'path': '/dashboard/lista-blog',
        'component': <DashboardPubs/>
    },
    {
        'name': 'Eventos',
        'path': '/dashboard/lista-eventos',
        'component': <Eventos/>
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