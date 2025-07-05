import { genericFetch, genericFetchWithAutoRefresh } from "../api"

const eventosURL = "/eventos"

export function getEventos() {
    return genericFetch(`${eventosURL}/lista-eventos/`)
        .then((eventos) => eventos)
}

export function getEventoFromId(id) {
    return genericFetch(`${eventosURL}/detalles-evento-id/${id}`)
        .then((eventos) => eventos)
}

export function deleteElement(id) {
    const token = localStorage.getItem('access_token')
    return genericFetchWithAutoRefresh(`${eventosURL}/evento/${id}`, {
        method: `DELETE`,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(() => {
            alert('Evento eliminado')
        })
        .catch(error => {
            console.error("error al eleminar el evento", error)
            throw error
        })
}