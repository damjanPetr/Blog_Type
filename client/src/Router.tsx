import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage.tsx";
import { AuthProvider } from "./context/Auth.tsx";
import Header from "./layouts/Header.tsx";
import Home, { homeLoader } from "./pages/Home/Home.tsx";
import MovieDetail, {
  movieDetailLoader,
} from "./pages/MovieDetail/MovieDetail.tsx";
import { MovieDetails } from "./types/types.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthProvider />,
    children: [
      {
        path: "/",
        element: <Header />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: <Home />,
            loader: async () => {
              return homeLoader(1);
            },
          },
          {
            path: "/:movieId/details",
            element: <MovieDetail />,
            loader: async ({ params }) => {
              const detail = (await movieDetailLoader(
                params.movieId
              )) as MovieDetails;

              return detail;
            },
          },
        ],
      },
    ],
  },
]);

export default router;
