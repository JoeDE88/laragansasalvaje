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

export default function rendervideo(url, titulo) {
    return (
      <>
      <iframe
        width="100%"
        height="315"
        src={convertirVideoEmbed(url)}
        title={titulo}
        style={{border:0}}
        allowFullScreen
        ></iframe>
        </>
    );
}

