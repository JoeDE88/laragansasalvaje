import { Box, TextField } from "@mui/material";
import GreenButton from "../components/layout/GreenButton"
import Titulo from "../components/layout/Titulo"
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router"
import {AdminContext} from "../context/AdminContext"

export default function LoginPage() {

    const [loginUsername, setLoginUsername] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    const {login, isAuth, error} = useContext(AdminContext)

    const navigate = useNavigate()

    useEffect(()=>{
        if (isAuth) {
            navigate('/dashboard')
        }
    }, [isAuth,navigate])

    return (
        <>
        <Titulo titulo={'Admin'}/>
            <Box sx={{ height: "100vh", display: 'flex', justifyContent: 'center'}}>

                <Box
                    component="form"
                    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="Username"
                            value={loginUsername}
                            onChange={(e)=>setLoginUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            value={loginPassword}
                            onChange={(e)=>setLoginPassword(e.target.value)}
                        />
                    </div>
                    <Box sx={{display:'flex',justifyContent:'center'}}>
                        <GreenButton texto={'Login'} onClick={()=> login(loginUsername,loginPassword)}/>
                    </Box>
                </Box>
            </Box>
        </>
    )
}