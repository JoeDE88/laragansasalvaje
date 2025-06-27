import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { baseURL } from "../../../services/api/api";
import { Box, Container, Typography } from "@mui/material";
import Titulo from "../../layout/Titulo";
import RenderVideo from "../../../utils/youtube/functions";

export default function PublicacionCard() {
  const [articulo, setArticulo] = useState([])
  let { slug } = useParams()

  useEffect(() => {
    fetch(`${baseURL}/blog/detalles-publicacion-slug/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        setArticulo(data)
      })
  }, [])

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh', // 100% altura de la ventana
    }}>
      <Titulo titulo={articulo.titulo}></Titulo>
      <Container maxWidth='lg' sx={{ mb: 4 }}>
        <Typography>{articulo.contenido}</Typography>
      </Container>
      {articulo.imagen_destacada && (
        <Box sx={{
          width: '100%',
          height: '70%',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Box
            component='img'
            src={`${articulo.imagen_destacada}`}
            sx={{
              maxWidth: 'lg',
              objectFit: 'contain'
            }}
          />
        </Box>
      )}

      {articulo.tipo === 'video' && (
        <>
          {articulo.archivo_video ? (
            <>
              <Box>
                <Typography variant="body1" sx={{ p: 0.5 }}>
                  {articulo.contenido}
                </Typography>
              </Box>
              <video controls width="100%" style={{ marginTop: '1rem' }}>
                <source src={`${baseURL}${articulo.archivo_video}`} type="video/mp4" />
                Tu navegador no soporta el video.
              </video>
            </>
          ) : articulo.url_video ? (
            <Box sx={{ mt: 1 }}>
              <RenderVideo url={articulo.url_video} titulo={articulo.titulo} />
            </Box>
          ) : (
            <Typography variant="body2">Sin video disponible</Typography>
          )}
        </>
      )}
    </Box>
  )
}