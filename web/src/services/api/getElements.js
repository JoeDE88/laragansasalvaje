import { baseURL } from "./api";

export default function getElements(url){
    return fetch(`${baseURL}${url}`)
    .then((res) => res.json())
    .then((data)=>data)
}

