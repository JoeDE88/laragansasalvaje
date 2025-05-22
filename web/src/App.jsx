import { Routes, Route } from "react-router";
import './App.css'
import { routeConfig } from "./routes/routeConfig";
import ProductPage from "./pages/Shop/ProductPage";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import ShopCartPage from "./pages/Shop/ShopCartPage";
import PublicacionPage from "./pages/Blog/PublicacionPage";
import CategoriaPage from "./pages/Galeria/CategoriaPage";
import PrivacidadPage from "./pages/PrivacidadPage";
import CookiesPage from "./pages/CookiesPage";
import TerminosCondicionesPage from "./pages/TerminosCondicionesPage";
import './assets/css/cookieconsent-style.css'

function App() {

  return (
    <>
      <ShoppingCartProvider>
        <Routes>
          {routeConfig.map((route) => {
            return (
              <Route key={route.name} path={route.path} element={route.component} />
            )
          })}
          <Route path="shop/:slug" element={<ProductPage />} />
          <Route path="blog/publicaciones/:slug" element={<PublicacionPage />} />
          <Route path="obras/:slug" element={<CategoriaPage></CategoriaPage>} />
          <Route path="carrito/" element={<ShopCartPage />} />
          <Route path="politica-de-privacidad" element={<PrivacidadPage></PrivacidadPage>} />
          <Route path='politica-de-cookies' element={<CookiesPage></CookiesPage>} />
          <Route path='terminos-y-condiciones' element={<TerminosCondicionesPage></TerminosCondicionesPage>} />
        </Routes>
      </ShoppingCartProvider>
    </>
  )
}

export default App
