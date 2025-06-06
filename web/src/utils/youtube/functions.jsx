import { Typography, Button, Box } from "@mui/material";
import { useEffect, useState } from "react";

function convertirVideoEmbed(url) {
  try {
    let videoId = null;

    const shortUrlMatch = url.match(/youtu\.be\/([^?&]+)/);
    if (shortUrlMatch) videoId = shortUrlMatch[1];

    const longUrlMatch = url.match(/v=([^&]+)/);
    if (longUrlMatch) videoId = longUrlMatch[1];

    const shortsMatch = url.match(/youtube\.com\/shorts\/([^?&]+)/);
    if (shortsMatch) videoId = shortsMatch[1];

    const embedMatch = url.match(/youtube\.com\/embed\/([^?&]+)/);
    if (embedMatch) videoId = embedMatch[1];

    if (videoId) return `https://www.youtube.com/embed/${videoId}`;

    return url;
  } catch (error) {
    console.error("Error al convertir la URL del video:", error);
    return url;
  }
}

export default function RenderVideo({ url, titulo }) {
  const [consentYoutube, setConsentYoutube] = useState(false);

  useEffect(() => {
    if (window.CookieConsent) {
      setConsentYoutube(window.CookieConsent.acceptedCategory("youtube"));
    }

    function onConsent() {
      setConsentYoutube(window.CookieConsent.acceptedCategory("youtube"));
    }

    window.addEventListener("cc:onConsent", onConsent);

    return () => {
      window.removeEventListener("cc:onConsent", onConsent);
    };
  }, []);

  if (!consentYoutube) {
    return (
      <>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
          mt: 2,
        }}>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Para ver los videos de YouTube, acepta las cookies de contenido externo.{" "}
          </Typography>
          <Button
            sx={(theme) => ({
              backgroundColor: 'blancoPerla.main',
              color: 'tertiary.main',
              border: `solid 1px ${theme.palette.tertiary.main}`,
              "&:hover": {
                backgroundColor: 'tertiary.main',
                color: 'blancoPerla.main'
              }
            })}
            onClick={() => window.CookieConsent.showPreferences()}
          >
            Gestionar preferencias
          </Button>
        </Box>
      </>
    );
  }

  return (
    <>
      <Box sx={{
        position: 'relative',
        width: '60%',           // Un poco más del 50%
        paddingBottom: '33.75%', // 16:9 aspect ratio con 60% de ancho (60% * 9 / 16 = 33.75%)
        height: 0,
        overflow: 'hidden',
        maxWidth: '100%',       // Para que no se desborde en pantallas pequeñas
        margin: '0 auto'
      }}>
        <iframe
          src={convertirVideoEmbed(url)}
          title={titulo}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 0,
          }}
          allowFullScreen
        />
      </Box>
    </>
  );
}
