import { createContext, useContext, useEffect, useState } from "react";
import { baseURL } from "../services/api/api";

export const AdminContext = createContext({
    admin: null,
    token: null,
    error: null,
    login: () => { },
    logout: () => { },
})

export const AdminProvider = ({ children }) => {
    const [admin, setAdmin] = useState(null)
    const [token, setToken] = useState(()=> localStorage.getItem('token' || null))
    const [isAuth,setIsAuth] = useState(false)
    const [error, setError] = useState(null);

    useEffect(()=>{
        if (token && !admin){
            const username = localStorage.getItem('username')
            if (username) {
                setAdmin({username})
            }
        }
    }, [token, admin])

    const login = (username, password) => {
        setError(null)
        fetch(`${baseURL}/users/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
            .then((res) => {
                if (!res.ok) {
                    if (res.status === 401) throw new Error('Credenciales incorrectas')
                    throw new Error('Error en el login')
                }
                return res.json()
            })
            .then((data) => {
                setToken(data.token)
                setAdmin({ username })
                setIsAuth(true)
                localStorage.setItem('token', data.token)
                localStorage.setItem('username', username)
            })
            .catch((err) => {
                setError(err.message)
            })
    }

    const logout = () => {
        setToken(null)
        setAdmin(null)
        setIsAuth(false)
        localStorage.removeItem('token')
        localStorage.removeItem('username')
    }

return (
    <AdminContext.Provider value={{token, admin,isAuth, error, login, logout}}>
        {children}
    </AdminContext.Provider>
)
}
