import { Box, Grid, Modal, Typography} from "@mui/material"
import CategoriaItem from "./CategoriaItem"
import { baseURL } from "../../services/api/api"
import { useState } from "react"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs:300,md:350},
    height: {xs:300,md:350},
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 2,
    p: 4,
};

export default function CategoriaGrid({ obras }) {
    const [open, setOpen] = useState(false)
    const [obraSeleccionada, setObraSeleccionada] = useState([])

    const handleOpen = (obra) => {
        setObraSeleccionada(obra)
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
        setObraSeleccionada([])
    }

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                        <Box>
                            {obraSeleccionada && (
                                <>
                                <Box>
                                    <Typography sx={{marginBottom:2}} variant="h3">{obraSeleccionada.nombre}</Typography>
                                    <Typography variant="h6" fontStyle={'oblique'}>{obraSeleccionada.descripción}</Typography>
                                </Box>
                                <Box sx={{position:'absolute', bottom:35}}>
                                    <Typography variant="h6">{obraSeleccionada.tecnica}</Typography>
                                    <Typography variant="h6">{obraSeleccionada.dimensiones}</Typography>
                                    <Typography variant="h6">{obraSeleccionada.creado_en}</Typography>
                                </Box>
                                </>)}
                        </Box>
                </Box>
            </Modal>
            <Box sx={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                gap:4,
                padding:4
            }}>
                {obras.map((obra, index) => {
                    return (
                        <>
                            <Grid key={index} onClick={()=>handleOpen(obra)} sx={{ width: '100%', maxWidth: '90vw' }}>
                                <CategoriaItem image={`${baseURL}${obra.imagen}`} ></CategoriaItem>
                            </Grid>
                        </>
                    )
                })}
            </Box>
        </>
    )
}