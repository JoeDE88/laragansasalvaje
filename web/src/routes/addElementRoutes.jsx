import AddEvento from "../components/admin/Eventos/AddEvento";
import AddPub from "../components/admin/Publicaciones/AddPub";
import AddObra from "../components/admin/Obras/AddObra"
import AddProd from "../components/admin/Tienda/AddProd";

export const addElementRoute = [
    {
        'name':'publicación',
        'path':'/dashboard/add-publicacion',
        'component':<AddPub/>
    },
    {
        'name':'evento',
        'path':'/dashboard/add-evento',
        'component':<AddEvento/>
    },
    {
        'name':'obra',
        'path':'/dashboard/add-obra',
        'component':<AddObra/>
    },
    {
        'name':'producto',
        'path':'/dashboard/add-producto',
        'component':<AddProd></AddProd>
    },
]