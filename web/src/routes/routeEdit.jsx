import EditEvento from "../components/admin/Eventos/EditEvento";
import EditObra from "../components/admin/Obras/EditObra";
import EditPublicacion from "../components/admin/Publicaciones/EditPublicacion";

export const routeEdit = [
    {
        'name': 'Obra',
        'path': '/obra/:id',
        'component': <EditObra/>
    },
    {
        'name':'Evento',
        'path': '/evento/:id',
        'component':<EditEvento/>
    },
    {
        'name':'Publicacion',
        'path': '/publicacion/:id',
        'component':<EditPublicacion/>
    }

]