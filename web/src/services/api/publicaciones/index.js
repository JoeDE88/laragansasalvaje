import {genericFetch} from "../api"

const blogURL = '/blog'

export function getPublicaciones(){
    return genericFetch(`${blogURL}/lista-publicaciones/`)
    .then((pubs)=>pubs)
}

export function getPublicacionFromSlug(slug){
    return genericFetch(`${blogURL}/detalles-publicacion-slug/${slug}`)
    .then((pub)=>pub)
}

export function getPublicacionFromId(id){
    return genericFetch(`${blogURL}/detalles-publicacion-id/${id}`)
    .then((pub)=>pub)
}