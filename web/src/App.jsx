import { Routes, Route } from "react-router";
import './App.css'
import { publicRoutes, privateRoutes } from "./routes/routeConfig";
import ProductPage from "./pages/Shop/ProductPage";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import ShopCartPage from "./pages/Shop/ShopCartPage";
import PublicacionPage from "./pages/Blog/PublicacionPage";
import CategoriaPage from "./pages/Galeria/CategoriaPage";
import PrivacidadPage from "./pages/PrivacidadPage";
import CookiesPage from "./pages/CookiesPage";
import TerminosCondicionesPage from "./pages/TerminosCondicionesPage";
import './assets/css/cookieconsent-style.css'
import { AdminProvider } from "./context/AdminContext";
import PrivateRoute from "./components/admin/PrivateRoute";

function App() {

  return (
    <>
      <AdminProvider>
        <ShoppingCartProvider>
          <Routes>
            {publicRoutes.map((route) => {
              return (
                <Route key={route.name} path={route.path} element={route.component} />
              )
            })}
            {privateRoutes.map((route)=>{
              return (
                <Route key={route.name} path={route.path} element={<PrivateRoute>{route.component}</PrivateRoute>} />
              )
            })}
          </Routes>
        </ShoppingCartProvider>
      </AdminProvider>
    </>
  )
}

export default App
