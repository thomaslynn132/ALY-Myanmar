import { Error404, Home, About, Services, History } from "../pages";
import { ROUTES } from "./routerConstants";
import { Routes, Route } from "react-router-dom";

const routes = [
  {
    component: <Home />,
    errorComponent: <Error404 />,
    path: ROUTES.HOME,
  },
  {
    component: <About />,
    path: ROUTES.ABOUT,
  },
  {
    component: <Services />,
    path: ROUTES.SERVICES,
  },
  {
    component: <History />,
    path: ROUTES.HISTORY,
  },
  {
    component: <Error404 />,
    path: ROUTES.Error404,
  },
];

export const Router = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route path={`${route.path}`} element={route.component} key={index} />
      ))}
    </Routes>
  );
};
