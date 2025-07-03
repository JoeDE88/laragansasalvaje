import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Typography } from "@mui/material";
import { baseURL } from "../../../services/api/api";
import getYoutubeThumbnail from "../../../utils/youtube/getYoutubeThumbnail";

export default function BlogCard({ publicacion }) {
  const {
    tipo,
    titulo,
    contenido,
    imagen_destacada,
    url_video,
    archivo_video,
    etiqueta,
    creado_en
  } = publicacion;

  const fecha = new Date(creado_en)

  const fechaCompleta = fecha.getUTCDate() + "/" + (fecha.getUTCMonth() + 1) + "/" + fecha.getFullYear()
  
 
  return (
    <Card elevation={0} sx={{ mb: 3 }}>
      <CardActionArea>
        <CardContent sx={{ backgroundColor: 'blancoPerla.main' }}>
          <Typography variant="h5" sx={{ color: 'blancoPerla.text' }}>{titulo}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mx: 2, mb: 1 }}>
            <Typography fontSize={'0.8rem'} color="blancoPerla.text">{etiqueta}</Typography>
            <Divider
              sx={{ height: '12px', mx: 2, borderColor: 'blancoPerla.text' }}
              orientation="vertical"
              variant="middle"
              flexItem
            />
            <Typography fontSize={'0.8rem'} color="blancoPerla.text">{fechaCompleta}</Typography>
          </Box>

          {tipo === 'articulo' || tipo === 'imagen' && (
            <>
              {imagen_destacada && (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <CardMedia
                    component="img"
                    image={`${baseURL}${imagen_destacada}`}
                    alt={titulo}
                    sx={{ mt: 2, borderRadius: 2, width: 600, height: 500 }}
                  />
                </Box>
              )}
              <Box>
                <Typography variant="body1" sx={{ p: 0.5 }}>
                  {contenido}
                </Typography>
              </Box>
            </>
          )}

          {tipo === 'video' && (
            <>
              {archivo_video ? (
                <>
                  <video controls width="100%" style={{ marginTop: '1rem' }}>
                    <source src={`${baseURL}${archivo_video}`} type="video/mp4" />
                    Tu navegador no soporta el video.
                  </video>
                  <Box>
                    <Typography variant="body1" sx={{ p: 0.5 }}>
                      {contenido}
                    </Typography>
                  </Box>
                </>
              ) : url_video ? (
                <>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={getYoutubeThumbnail(url_video)}></img>
                  </Box>
                  <Box sx={{ mt: 1 }}>
                    <Typography variant="body1" sx={{ p: 0.5 }}>
                      {contenido}
                    </Typography>
                  </Box>
                </>
              ) : (
                <Typography variant="body2">Sin video disponible</Typography>
              )}
            </>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

