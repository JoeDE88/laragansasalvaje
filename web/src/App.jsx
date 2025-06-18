import { Routes, Route } from "react-router";
import './App.css'
import { publicRoutes, privateRoutes } from "./routes/routeConfig";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import './assets/css/cookieconsent-style.css'
import { AdminProvider } from "./context/AdminContext";
import PrivateRoute from "./components/admin/PrivateRoute";
import { dashboardRoutes } from "./routes/routeDashboard";

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
          </Routes>
        </ShoppingCartProvider>
      </AdminProvider>
    </>
  )
}

export default App
