import EditEvento from "../components/admin/Eventos/EditEvento";
import EditObra from "../components/admin/Obras/EditObra";
import EditPublicacion from "../components/admin/Publicaciones/EditPublicacion";
import EditProducto from "../components/admin/Tienda/EditProducto";

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
    },
    {
        'name':'Producto',
        'path': '/producto/:id',
        'component': <EditProducto/>
    },

]