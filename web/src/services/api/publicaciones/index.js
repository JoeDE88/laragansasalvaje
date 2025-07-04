import {genericFetch} from "../api"

export function getPublicaciones(){
    return genericFetch(`/blog/lista-publicaciones/`)
    .then((pubs)=>pubs)
}

export function getPublicacionFromSlug(slug){
    return genericFetch(`/blog/detalles-publicacion-slug/${slug}`)
    .then((pub)=>pub)
}

export function getPublicacionFromId(id){
    return genericFetch(`/blog/detalles-publicacion-id/${id}`)
    .then((pub)=>pub)
}