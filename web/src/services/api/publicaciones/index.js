import {genericFetch, genericFetchWithAutoRefresh} from "../api"

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

export function deletePublicacion(id){
    const token = localStorage.getItem('access_token')
    return genericFetchWithAutoRefresh(`${blogURL}/publicacion/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(()=>{
        alert('Publicación eliminada.')
    })
    .catch(error => {
        console.error("Error al eliminar la publicación.",error)
        throw error
    })
}