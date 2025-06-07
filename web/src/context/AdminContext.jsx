import { createContext, useEffect, useState } from "react";
import { baseURL } from "../services/api/api";

const AdminContext = createContext({
    admin: {},
    login: () => { },
    logout: () => { },
})

export const AdminProvider = ({ children }) => {
    const [admin, setAdmin] = useState([])
    const [token, setToken] = useState(null)
    const [error, setError] = useState(null);


    const login = (username, password) => {
        setError(null)
        fetch(`${baseURL}/users/login`, {
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
            })
            .catch((err) => {
                setError(err.message)
            })
    }

    const logout = () => {
        setToken(null)
        setAdmin(null)
    }

return (
    <AdminContext.Provider value={{token, admin, error, login, logout}}>
        {children}
    </AdminContext.Provider>
)

}

