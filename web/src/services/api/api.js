export const baseURL = import.meta.env.VITE_API_URL;

export function genericFetch (url){
    return fetch(`${baseURL}${url}`)
    .then((data)=> data.json())
}