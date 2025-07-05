import { createContext, useContext, useEffect, useState } from "react";
import { baseURL } from "../services/api/api";

export const AdminContext = createContext({
    admin: null,
    token: null,
    error: null,
    login: () => { },
    logout: () => { },
    refreshAccessToken: ()=>{ }
})

export const AdminProvider = ({ children }) => {
    const [admin, setAdmin] = useState(null)
    const [token, setToken] = useState(() => localStorage.getItem('access_token'))
    const [isAuth, setIsAuth] = useState(false)
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!admin) {
            const storedToken = localStorage.getItem('access_token')
            const username = localStorage.getItem('username')
            if (username && storedToken) {
                setToken(storedToken)
                setAdmin({ username })
                setIsAuth(true)
            }
        }
    }, [])

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
                setToken(data.access)
                setAdmin({ username })
                setIsAuth(true)
                localStorage.setItem('access_token', data.access)
                localStorage.setItem('refresh_token', data.refresh)
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
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        localStorage.removeItem('username')
    }

    const refreshAccessToken = () => {
        const refresh = localStorage.getItem('refresh_token');
    if (!refresh) {
        return Promise.reject(new Error('No hay refresh token'));
    }

    return fetch(`${baseURL}/users/refresh_token/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refresh })
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error('Error al renovar sesión');
            }
            return res.json();
        })
        .then((data) => {
            localStorage.setItem('access_token', data.access);
            setToken(data.access)
            return data.access;
        });
}

    return (
        <AdminContext.Provider value={{ token, admin, isAuth, error, login, logout, refreshAccessToken }}>
            {children}
        </AdminContext.Provider>
    )
}
