import { genericFetch } from "../api"

export function getObras(){
    return genericFetch(`/galeria/lista-obras/`)
    .then((obras)=>obras)
}

export function getObrasFromSlug(slug){
    return genericFetch(`/galeria/${slug}`)
    .then((obras)=>obras)
}

export function getObraFromId(id){
    return genericFetch(`/galeria/detalles-obra-id/${id}`)
    .then((obra)=>obra)
}

export function getPrimerasObras(){
    return genericFetch(`/galeria/primeras-por-categoria/`)
    .then((firstObras)=>firstObras)
}