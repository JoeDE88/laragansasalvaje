import { Routes, Route } from "react-router";
import './App.css'
import { routeConfig } from "./routes/routeConfig";
import ProductPage from "./pages/Shop/ProductPage";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import ShopCartPage from "./pages/Shop/ShopCartPage";
import PublicacionPage from "./pages/Blog/PublicacionPage";
import CategoriaGrid from "./components/obras/structure/CategoriaGrid";
import CategoriaPage from "./pages/Galeria/CategoriaPage";

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
        <Route path="shop/:slug" element={<ProductPage/>} />
        <Route path="blog/publicaciones/:slug" element={<PublicacionPage/>} />
        <Route path="obras/:slug" element={<CategoriaPage></CategoriaPage>} />
        <Route path="carrito/" element={<ShopCartPage/>} />
      </Routes>
        </ShoppingCartProvider>
    </>
  )
}

export default App
