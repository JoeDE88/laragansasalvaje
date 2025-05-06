import { Routes, Route } from "react-router";
import './App.css'
import { routeConfig } from "./routes/routeConfig";
import ArticuloPage from "./pages/Blog/ArticuloPage";
import ProductPage from "./pages/Shop/ProductPage";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import ShopCartPage from "./pages/Shop/ShopCartPage";
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
        <Route path="blog/articulos/:slug" element={<ArticuloPage/>} />
        <Route path="obras/:slug" element={<CategoriaPage/>} />
        <Route path="carrito/" element={<ShopCartPage/>} />
      </Routes>
        </ShoppingCartProvider>
    </>
  )
}

export default App
