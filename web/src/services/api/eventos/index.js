import { genericFetch } from "../api"

export function getEventos(){
    return genericFetch(`/eventos/lista-eventos/`)
    .then((eventos)=>eventos)
}

export function getEventoFromId(id){
    return genericFetch(`/eventos/detalles-evento-id/${id}`)
    .then((eventos)=>eventos)
}
