import { genericFetch, genericFetchWithAutoRefresh } from "../api"

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

export function deleteProducto(id){
    const token = localStorage.getItem('access_token')
    return genericFetchWithAutoRefresh(`${shopURL}/producto/${id}`,{
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(()=>alert("Producto eliminado."))
    .catch(error => {
        console.error("Error al eliminar el producto: ", error)
        throw error
    })
}