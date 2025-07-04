export const baseURL = import.meta.env.VITE_API_URL;

export function genericFetch (url, config){
    return fetch(`${baseURL}${url}`, config)
    .then((data)=> data.json())
    .catch((error)=> {
        throw new Error(error)
    })
}