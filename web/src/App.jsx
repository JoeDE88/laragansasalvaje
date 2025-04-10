import { Routes, Route } from "react-router";
import './App.css'
import {routeConfig} from "./routes/routeConfig";

function App() {

  return (
    <>
        <Routes>
          {routeConfig.map((route)=>{
            return (
              <Route key={route.name} path={route.path} element={route.component} />
            )
          })}
        </Routes>
    </>
  )
}

export default App
