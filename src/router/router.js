import { Home, About, Services, History } from "../pages";
import { ROUTES } from "./routerConstants";
import { Routes, Route } from "react-router-dom";

const routes = [
  {
    component: <Home />,
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
