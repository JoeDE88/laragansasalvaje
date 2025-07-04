import { genericFetch } from "../api"

const shopURL = '/shop'

export function getProductos(){
    return genericFetch(`${shopURL}/lista-productos/`)
    .then((prods)=>prods)
}

export function getProductoFromId(id){
    return genericFetch(`${shopURL}/detalles-producto-id/${id}`)
    .then((prod)=>prod)
}

export function getProductoFromSlug(slug){
    return genericFetch(`${shopURL}/detalles-producto-slug/${slug}`)
    .then((prod)=>prod)
}