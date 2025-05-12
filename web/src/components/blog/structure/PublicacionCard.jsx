import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Typography } from "@mui/material";
import InstagramEmbed from "./InstagramEmbed";
import { baseURL } from "../../../services/api/api";

export default function PublicacionCard({ publicacion }) {
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
            <Typography fontSize={'0.8rem'} color="blancoPerla.text">{creado_en}</Typography>
          </Box>

          {tipo === 'articulo' && (
            <>
              {imagen_destacada && (
                <CardMedia
                  component="img"
                  image={imagen_destacada}
                  alt={titulo}
                  sx={{ mt: 2, borderRadius: 2 }}
                />
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
                <Box sx={{ mt: 2 }}>
                  {renderVideo(url_video, titulo)}
                  <Typography variant="body1" sx={{ p: 0.5 }}>
                    {contenido}
                  </Typography>
                </Box>
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

function renderVideo(url, titulo) {
  
  if (url.includes('youtube') || url.includes('youtu.be')) {
    return (
      <iframe
        width="100%"
        height="315"
        src={convertirVideoEmbed(url)}
        title={titulo}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    );
  } else if (url.includes('instagram.com')) {
    return <InstagramEmbed url={url} />;
  } else {
    return <Typography variant="body2">Formato de video no compatible</Typography>;
  }
}

function convertirVideoEmbed(url) {

  try {
    let videoId = null;

    // Verificamos la URL corta de YouTube
    const shortUrlMatch = url.match(/youtu\.be\/([^?&]+)/);
    if (shortUrlMatch) {
      videoId = shortUrlMatch[1];
    }

    // Verificamos la URL larga de YouTube
    const longUrlMatch = url.match(/v=([^&]+)/);
    if (longUrlMatch) {
      videoId = longUrlMatch[1];
    }

    // Verificamos los YouTube Shorts
    const shortsMatch = url.match(/youtube\.com\/shorts\/([^?&]+)/);
    if (shortsMatch) {
      videoId = shortsMatch[1];
    }

    // Verificamos el URL de embed
    const embedMatch = url.match(/youtube\.com\/embed\/([^?&]+)/);
    if (embedMatch) {
      videoId = embedMatch[1];
    }

    // Si encontramos el videoId, generamos la URL del iframe
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // Si no encontramos un ID de video válido, devolvemos la URL original
    return url;
  } catch (error) {
    console.error("Error al convertir la URL del video:", error);
    return url;
  }
}