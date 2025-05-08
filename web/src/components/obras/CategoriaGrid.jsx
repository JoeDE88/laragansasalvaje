import { Box, Button, Grid, Modal, Typography, Zoom } from "@mui/material"
import ObrasItem from "./ObrasItem"
import { baseURL } from "../../services/api/api"
import { useState } from "react"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 2,
    p: 4,
};

export default function CategoriaGrid({ obras }) {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <>

            <Grid container spacing={0.5} sx={{ margin: 5, padding: 5 }}>
                {obras.map((obra, index) => {
                    return (
                        <>
                            <Grid key={index} size={12} onClick={handleOpen} sx={{ mb: 3, textDecoration: 'none' }}>
                                <ObrasItem image={`${baseURL}${obra.imagen}`} color={'blancoPerla.main'}></ObrasItem>
                            </Grid>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Zoom in={open}>
                                        <Typography>Hola</Typography>
                                    </Zoom>
                                </Box>
                            </Modal>
                        </>
                    )
                })}

            </Grid>
        </>
    )
}