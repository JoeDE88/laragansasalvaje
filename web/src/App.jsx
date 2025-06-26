import { Routes, Route } from "react-router";
import './App.css'
import { publicRoutes, privateRoutes } from "./routes/routeConfig";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import './assets/css/cookieconsent-style.css'
import { AdminProvider } from "./context/AdminContext";
import PrivateRoute from "./components/admin/utils/PrivateRoute";
import { dashboardRoutes } from "./routes/routeDashboard";
import AddPub from "./components/admin/Publicaciones/AddPub"
import AddEvento from "./components/admin/Eventos/AddEvento";
import { addElementRoute } from "./routes/addElementRoutes";
import EditObra from "./components/admin/Obras/EditObra";

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
            {dashboardRoutes.map((route)=>{
              return (
                <Route key={route.name} path={route.path} element={route.component}/>
              )
            })}
            {addElementRoute.map((route)=>{
              return (
                <Route key={route.name} path={route.path} element={route.component}/>
              )
            })}
            <Route path='/obra/:id' element={<EditObra></EditObra>}/>
          </Routes>
        </ShoppingCartProvider>
      </AdminProvider>
    </>
  )
}

export default App
