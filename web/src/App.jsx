import { Routes, Route } from "react-router";
import './App.css'
import {routeConfig} from "./routes/routeConfig";
import ProductPage from "./pages/ProductPage";

function App() {

  return (
    <>
        <Routes>
          {routeConfig.map((route)=>{
            return (
              <Route key={route.name} path={route.path} element={route.component} />
            )
          })}
          <Route path="shop/:name" element={<ProductPage/>} />
        </Routes>
    </>
  )
}

export default App
