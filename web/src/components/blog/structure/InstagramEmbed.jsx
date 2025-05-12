import { Box } from "@mui/material";
import { useEffect } from "react";

export default function InstagramEmbed({ url }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://www.instagram.com/embed.js");
    script.setAttribute("async", "");

    document.body.appendChild(script);

    return () => {
      // Verifica que el script aún esté en el DOM antes de removerlo
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [url]);

  return (
    <>
    <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ maxWidth: "540px", width: "100%" }}
      />
    </Box>
      </>
  );
}