export const baseURL = import.meta.env.VITE_API_URL;

function genericFetch (url){
    return fetch(`${baseURL}${url}`)
    .then((data)=> data.json())
}

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

export function getEventos(){
    return genericFetch(`/eventos/lista-eventos/`)
    .then((eventos)=>eventos)
}

export function getEventoFromId(id){
    return genericFetch(`/eventos/detalles-evento-id/${id}`)
    .then((eventos)=>eventos)
}

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

export function getProductos(){
    return genericFetch(`/shop/lista-productos/`)
    .then((prods)=>prods)
}

export function getProductoFromId(id){
    return genericFetch(`/shop/detalles-producto-id/${id}`)
    .then((prod)=>prod)
}