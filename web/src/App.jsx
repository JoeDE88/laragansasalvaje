import { Routes, Route } from "react-router";
import './App.css'
import {routeConfig} from "./routes/routeConfig";
import ProductPage from "./pages/ProductPage";
import Articulo from "./components/blog/views/Articulo";

function App() {

  return (
    <>
        <Routes>
          {routeConfig.map((route)=>{
            return (
              <Route key={route.name} path={route.path} element={route.component} />
            )
          })}
          <Route path="shop/:slug" element={<ProductPage/>} />
          <Route path="blog/articulos/:slug" element={<Articulo></Articulo>}/>
        </Routes>
    </>
  )
}

export default App
