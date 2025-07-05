import { genericFetch, genericFetchWithAutoRefresh } from "../api"

const galeriaURL = '/galeria'

export function getObras(){
    return genericFetch(`${galeriaURL}/lista-obras/`)
    .then((obras)=>obras)
}

export function getObrasFromSlug(slug){
    return genericFetch(`${galeriaURL}/${slug}`)
    .then((obras)=>obras)
}

export function getObraFromId(id){
    return genericFetch(`${galeriaURL}/detalles-obra-id/${id}`)
    .then((obra)=>obra)
}

export function getPrimerasObras(){
    return genericFetch(`${galeriaURL}/primeras-por-categoria/`)
    .then((firstObras)=>firstObras)
}

export function deleteObra(id){
    const token = localStorage.getItem('access_token')
    return genericFetchWithAutoRefresh(`${galeriaURL}/obra/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(()=> {
        alert('Obra eliminada')
    })
    .catch(error =>{
        console.error("error al eliminar la obra.")
        throw error
    })
}