import { Routes, Route } from "react-router";
import './App.css'
import { routeConfig } from "./routes/routeConfig";
import ArticuloPage from "./pages/Blog/ArticuloPage";
import ProductPage from "./pages/Shop/ProductPage";
import ObraPage from "./pages/Obras/ObraPage";

function App() {

  return (
    <>
      <Routes>
        {routeConfig.map((route) => {
          return (
            <Route key={route.name} path={route.path} element={route.component} />
          )
        })}
        <Route path="shop/:slug" element={<ProductPage/>} />
        <Route path="blog/articulos/:slug" element={<ArticuloPage/>} />
        <Route path="obras/:titulo" element={<ObraPage/>} />
      </Routes>
    </>
  )
}

export default App
