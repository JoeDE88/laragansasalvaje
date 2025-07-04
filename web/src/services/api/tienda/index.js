import { genericFetch } from "../api"

export function getProductos(){
    return genericFetch(`/shop/lista-productos/`)
    .then((prods)=>prods)
}

export function getProductoFromId(id){
    return genericFetch(`/shop/detalles-producto-id/${id}`)
    .then((prod)=>prod)
}

export function getProductoFromSlug(slug){
    return genericFetch(`/shop/detalles-producto-slug/${slug}`)
    .then((prod)=>prod)
}