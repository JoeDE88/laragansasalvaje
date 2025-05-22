import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';

CookieConsent.run({
    
    guiOptions: {
      consentModal: {
        layout: "box",
        position: "bottom center",
        transition: "slide",
      },
      preferencesModal: {
        layout: "box",
        transition: "slide",
      },
    },
    categories: {
      necessary: {
        readOnly: true,
        enabled: true,
      },
      youtube: {
        enabled: false,
        autoClear: true,
        services: ["youtube"],
      },
    },
    language: {
      default: "es",
      translations: {
        es: {
          consentModal: {
            title: "Este sitio usa cookies",
            description:
              "Utilizamos cookies para mejorar tu experiencia y mostrar contenido externo como videos de YouTube. Puedes aceptarlas o configurarlas.",
            acceptAllBtn: "Aceptar todas",
            acceptNecessaryBtn: "Solo necesarias",
            showPreferencesBtn: "Gestionar preferencias",
          },
          preferencesModal: {
            title: "Preferencias de cookies",
            acceptAllBtn: "Aceptar todas",
            acceptNecessaryBtn: "Solo necesarias",
            savePreferencesBtn: "Guardar preferencias",
            closeIconLabel: "Cerrar",
            sections: [
              {
                title: "Uso de cookies",
                description:
                  "Usamos cookies necesarias para el funcionamiento del sitio, y opcionalmente cookies de terceros (como YouTube) para contenido embebido.",
              },
              {
                title: "Cookies necesarias",
                description:
                  "Estas cookies son esenciales para el correcto funcionamiento del sitio y no pueden ser desactivadas.",
              },
              {
                title: "Contenido externo (YouTube)",
                description:
                  "Si aceptas, se cargarán videos embebidos desde YouTube.",
              },
            ],
          },
        },
      },
    },
    services: {
      youtube: {
        category: "youtube",
        type: "dynamic-script",
        search: "youtube.com",
        cookies: [
          {
            name: /^yt-remote.*$/,
            domain: "youtube.com",
          },
        ],
      },
    },
  });