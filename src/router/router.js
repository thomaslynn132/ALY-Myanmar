import {
  Home,
  About,
  Services,
  Contact,
}from "../pages";
import { ROUTES } from "./routerConstants";
import { Routes, Route } from "react-router-dom";

const routes = [
  {
    component: <Home/>,
    path: ROUTES.HOME,
  },
  {
    component: <About/>,
    path: ROUTES.ABOUT,
  },
  {
    component: <Services/>,
    path: ROUTES.SERVICES,
  },
  {
    component: <Contact/>,
    path: ROUTES.CONTACT,
  },
]

export const Router = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route path={`${route.path}`} element={route.component} key={index}/>
      ))}
    </Routes>
  )
}