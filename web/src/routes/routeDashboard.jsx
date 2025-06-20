
import Eventos from "../components/admin/layout/Eventos"
import Obras from "../components/admin/layout/Obras"
import Productos from "../components/admin/layout/Productos"
import ListaPublicaciones from "../components/admin/layout/ListaPublicaciones"

export const dashboardRoutes = [
    {
        'name': 'Publicaciones',
        'path': '/lista-blog',
        'component': <ListaPublicaciones></ListaPublicaciones>
    },
    {
        'name': 'Eventos',
        'path': '/lista-eventos',
        'component': <Eventos></Eventos>
    },
    {
        'name': 'Obras',
        'path': '/obras',
        'component': <Obras></Obras>
    },
    {
        'name': 'Productos',
        'path': '/shop',
        'component': <Productos></Productos>
    },
]