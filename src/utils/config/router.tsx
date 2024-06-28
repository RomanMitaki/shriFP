import FilmPage from "../../pages/FilmPage/FilmPage.tsx";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import MainPage from "../../pages/MainPage/MainPage.tsx";

export enum AppRoutes {
  MAIN = "main",
  FILM = "film",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.FILM]: "/film",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: {
  [AppRoutes.MAIN]: { path: string; element: JSX.Element };
  [AppRoutes.FILM]: { path: string; element: JSX.Element };
  [AppRoutes.NOT_FOUND]: { path: string; element: JSX.Element }
} = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.FILM]: {
    path: RoutePath.film,
    element: <FilmPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
