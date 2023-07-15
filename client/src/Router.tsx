import { createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/Auth.tsx";
import Header from "./layouts/Header.tsx";
import Home, { homeLoader } from "./pages/Home/Home.tsx";
import ErrorPage from "./ErrorPage.tsx";
import MovieDetail, {
  movieDetailLoader,
} from "./pages/MovieDetail/MovieDetail.tsx";

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
            loader: () => {
              return homeLoader(1);
            },
          },
          // {
          //   path: "/:movieId/details",
          //   element: <MovieDetail />,
          //   // loader: ({ params }: { movieID: number }) => {
          //   // console.log(params);
          //   // const play = movieDetailLoader(params.movieId);
          //   // return "";
          //   // },
          // },
        ],
      },
    ],
  },
]);

export default router;
