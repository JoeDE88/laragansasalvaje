import { Box, Typography, Link } from "@mui/material";
import ResponsiveAppBar from "../components/layout/Appbar";

export default function TerminosCondicionesPage() {
  return (
    <>
    <ResponsiveAppBar></ResponsiveAppBar>
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: "800px", margin: "auto" }}>
      <Typography variant="h4" gutterBottom>
        Términos y Condiciones de Uso
      </Typography>
      <Typography variant="body1" paragraph>
        El presente documento establece los términos y condiciones que regulan el acceso y uso del sitio web, así como las condiciones de compra en la tienda en línea gestionada por la artista Lara Gansa Salvaje.
      </Typography>
      <Typography variant="h6" gutterBottom>
        1. Titular del sitio
      </Typography>
      <Typography variant="body2" paragraph>
        Este sitio es gestionado por Lara Gansa Salvaje. Para cualquier consulta, puedes contactar a través de los canales indicados en la sección de contacto.
      </Typography>
      <Typography variant="h6" gutterBottom>
        2. Uso del sitio web
      </Typography>
      <Typography variant="body2" paragraph>
        Al acceder y utilizar este sitio web, aceptas estos términos y condiciones. No está permitido utilizar el sitio con fines ilícitos o que perjudiquen los derechos de terceros.
      </Typography>

      <Typography variant="h6" gutterBottom>
        3. Propiedad intelectual
      </Typography>
      <Typography variant="body2" paragraph>
        Todas las obras, imágenes, textos y contenidos presentes en este sitio son propiedad exclusiva de Lara Gansa Salvaje, salvo que se indique lo contrario. Está estrictamente prohibido copiar, reproducir, distribuir o utilizar cualquier contenido sin autorización expresa y por escrito de la autora.
      </Typography>

      <Typography variant="h6" gutterBottom>
        4. Condiciones de compra
      </Typography>
      <Typography variant="body2" paragraph>
        Los precios, descripciones y disponibilidad de los productos están sujetos a cambios sin previo aviso. Los pagos se gestionarán mediante las plataformas indicadas durante el proceso de compra.
      </Typography>
      <Typography variant="body2" paragraph>
        Una vez realizada la compra, recibirás una confirmación por correo electrónico. Las condiciones de envío, devolución y cancelación se especificarán en las páginas correspondientes del proceso de compra.
      </Typography>

      <Typography variant="h6" gutterBottom>
        5. Limitación de responsabilidad
      </Typography>
      <Typography variant="body2" paragraph>
        Este sitio se ofrece tal como está. No se garantiza la disponibilidad permanente ni la ausencia de errores. La titular no se hace responsable de daños derivados del uso del sitio o la imposibilidad de acceder al mismo.
      </Typography>

      <Typography variant="h6" gutterBottom>
        6. Enlaces externos
      </Typography>
      <Typography variant="body2" paragraph>
        Algunos contenidos pueden incluir enlaces a sitios web de terceros, como YouTube. No nos hacemos responsables del contenido, políticas o prácticas de dichos sitios.
      </Typography>

      <Typography variant="h6" gutterBottom>
        7. Legislación aplicable
      </Typography>
      <Typography variant="body2" paragraph>
        Estos términos y condiciones se rigen por la legislación aplicable en el país de residencia de la titular. En caso de disputa, las partes se someterán a los tribunales competentes.
      </Typography>

      <Typography variant="body2" sx={{ mt: 4 }}>
        Puedes consultar también nuestra{" "}
        <Link href="/politica-de-privacidad" underline="hover">
          Política de Privacidad
        </Link>{" "}
        y{" "}
        <Link href="/politica-de-cookies" underline="hover">
          Política de Cookies
        </Link>{" "}
        para más información sobre el tratamiento de datos personales y uso de cookies.
      </Typography>
    </Box>
    </>
  );
}
