import AddEvento from "../components/admin/Eventos/AddEvento";
import AddPub from "../components/admin/Publicaciones/AddPub";

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
        'component':''
    },
    {
        'name':'producto',
        'path':'/dashboard/add-producto',
        'component':''
    },
]