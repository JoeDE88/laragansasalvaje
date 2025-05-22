import { Box, Typography, Link } from "@mui/material";

export default function CookiesPage() {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: "800px", margin: "auto" }}>
      <Typography variant="h4" gutterBottom>
        Política de Cookies
      </Typography>

      <Typography variant="body1" paragraph>
        Este sitio web utiliza cookies para mejorar la experiencia del usuario, garantizar el correcto funcionamiento del sitio e integrar contenidos externos como vídeos de YouTube.
      </Typography>

      <Typography variant="h6" gutterBottom>
        ¿Qué son las cookies?
      </Typography>
      <Typography variant="body1" paragraph>
        Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Sirven para reconocer tu navegador y recordar cierta información durante tu navegación o en futuras visitas.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Tipos de cookies que utilizamos
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        1. Cookies necesarias (funcionales)
      </Typography>
      <Typography variant="body2" paragraph>
        Estas cookies son esenciales para el funcionamiento básico del sitio web. En el futuro se utilizarán para permitir el inicio de sesión de usuarios y mantener productos añadidos al carrito de compras. No recopilan información personal y no requieren consentimiento.
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        2. Cookies de terceros (YouTube)
      </Typography>
      <Typography variant="body2" paragraph>
        Algunos contenidos de este sitio, como vídeos embebidos desde YouTube, pueden instalar cookies de terceros que recopilan información sobre tu navegación. Estas cookies son gestionadas directamente por YouTube y están sujetas a sus propias políticas de privacidad.
      </Typography>

      <Typography variant="h6" gutterBottom>
        ¿Cómo puedes gestionar tus cookies?
      </Typography>
      <Typography variant="body1" paragraph>
        Al visitar este sitio web por primera vez, se te ofrece la posibilidad de aceptar o rechazar las cookies no esenciales. Además, puedes eliminar o bloquear cookies desde la configuración de tu navegador.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Enlaces de interés
      </Typography>
      <Typography variant="body2">
        Puedes consultar nuestra{" "}
        <Link href="/politica-de-privacidad" underline="hover">
          Política de Privacidad
        </Link>{" "}
        para más información sobre el tratamiento de tus datos personales.
      </Typography>
    </Box>
  );
}