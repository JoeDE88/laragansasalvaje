import { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";

export const baseURL = import.meta.env.VITE_API_URL;


export function genericFetch (url, config){
    return fetch(`${baseURL}${url}`, config)
    .then((data)=> data.json())
    .catch((error)=> {
        throw new Error(error)
    })
}

export function genericFetchWithAutoRefresh(url,config,refreshAccessToken){
    return fetch(`${baseURL}${url}`,config)
    .then(async (res)=> {
        if (res.status === 401) {
            const newAccessToken = await refreshAccessToken()
            const retryConfig = {
                ...config,
                headers: {
                    ...config.headers,
                    "Authorization" : `Bearer ${newAccessToken}`
                }
            }
            const retryRes = await fetch(`${baseURL}${url}`, retryConfig)
            if (!retryRes.ok) {
                throw new Error(`Error tras renovar token: ${retryRes.status}`)
            }
            return retryRes.json()
        }
        if (!res.ok){
            throw new Error(`Error: ${res.status}`)
        }
        return res.json()
    })
}