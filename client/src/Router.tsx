import { createBrowserRouter, defer } from "react-router-dom";
import ErrorPage from "./ErrorPage.tsx";
import { AuthProvider } from "./context/Auth.tsx";
import Header from "./layouts/Header.tsx";
import Home, { homeLoader } from "./pages/Home/Home.tsx";
import MovieDetail, {
  movieDetailLoader,
} from "./pages/MovieDetail/Main/MovieDetail.tsx";
import { MovieAltTitles, MovieDetails } from "./types/types.tsx";
import Main from "./layouts/Main.tsx";
import AlternativeTitles from "./pages/MovieDetail/AlternativeTitles/AlternativeTitles.tsx";
import CastCrew from "./pages/MovieDetail/CastCrew/CastCrew.tsx";
import ReleaseDate from "./pages/MovieDetail/ReleaseDate/ReleaseDate.tsx";
import Translations from "./pages/MovieDetail/Translations/Translations.tsx";
import Changes from "./pages/MovieDetail/Changes/Changes.tsx";
import Report from "./pages/MovieDetail/Report/Report.tsx";
import Edit from "./pages/MovieDetail/Edit/Edit.tsx";
import Backdrops from "./pages/Media/Backdrops/Backdrops.tsx";
import Logos from "./pages/Media/Logos/Logos.tsx";
import Posters from "./pages/Media/Posters/Posters.tsx";
import Clips from "./pages/Media/Videos/Clips/Clips.tsx";
import BehindTheScenes from "./pages/Media/Videos/BehindTheScenes/BehindTheScenes.tsx";
import Featuretess from "./pages/Media/Videos/Featuretess/Featuretess.tsx";
import Teasers from "./pages/Media/Videos/Teasers/Teasers.tsx";
import Trailers from "./pages/Media/Videos/Trailers/Trailers.tsx";
import Overview from "./pages/Discussion/Overview/Overview.tsx";
import General from "./pages/Discussion/General/General.tsx";
import Reviews from "./pages/Reviews/Reviews.tsx";
import ContentIssues from "./pages/Discussion/ContentIssues/ContentIssues.tsx";
import Login from "./pages/Login/Login.tsx";
import {
  getAltTitles,
  getChannges,
  getCredits,
  getMovieReleaseDate,
  getTranslations,
} from "./api/api.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthProvider />,
    children: [
      {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/",
            element: <Home />,
            loader: async () => {
              const startArray = [];

              for (let index = 1; index < 5; index++) {
                const results = await homeLoader(index);
                startArray.push(results);
              }

              return startArray;
            },
          },
          {
            path: "/:movieId/details",
            element: <MovieDetail />,
            loader: async ({ params }) => {
              const movieDetail = (await movieDetailLoader(
                params.movieId
              )) as MovieDetails;
              return defer({
                movieDetail,
              });
            },
          },
          {
            path: "/:movieId/alternative-titles",
            element: <AlternativeTitles />,
            loader: async ({ params }) => {
              const altTitles = (await getAltTitles(
                params.movieId
              )) as MovieAltTitles;
              return altTitles;
            },
          },
          {
            path: "/:movieId/cast-crew",
            element: <CastCrew />,
            loader: async ({ params }) => {
              const castCrew = await getCredits(params.movieID);
              return castCrew;
            },
          },
          {
            path: "/:movieId/release-date",
            element: <ReleaseDate />,
            loader: async ({ params }) => {
              const data = await getMovieReleaseDate(params.movieId);
              return data;
            },
          },

          {
            path: "/:movieId/translations",
            element: <Translations />,
            loader: async ({ params }) => {
              const data = await getTranslations(params.movieId);
              return data;
            },
          },
          {
            path: "/:movieId/changes",
            element: <Changes />,
            loader: async ({ params }) => {
              const data = await getChannges(params.movieId);
            },
          },
          {
            path: "/:movieId/report",
            element: <Report />,
          },
          {
            path: "/:movieId/edit",
            element: <Edit />,
          },
          //end of main Movied Detail
          {
            path: "/:movieId/images/backdrops",
            element: <Backdrops />,
          },
          {
            path: "/:movieId/images/logos",
            element: <Logos />,
          },
          {
            path: "/:movieId/images/posters",
            element: <Posters />,
          },
          //media/videos
          {
            path: "/:movieId/videos/clips",
            element: <Clips />,
          },
          {
            path: "/:movieId/videos/behind-the-scenes",
            element: <BehindTheScenes />,
          },
          {
            path: "/:movieId/videos/featurettes",
            element: <Featuretess />,
          },
          {
            path: "/:movieId/videos/teasers",
            element: <Teasers />,
          },
          {
            path: "/:movieId/videos/trailers",
            element: <Trailers />,
          },

          //fandom
          {
            path: "/:movieId/fandom/discuss/",
            element: <Overview />,
          },
          {
            path: "/:movieId/fandom/general",
            element: <General />,
          },
          {
            path: "/:movieId/fandom/content-issues",
            element: <ContentIssues />,
          },
          {
            path: "/:movieId/reviews",
            element: <Reviews />,
          },
        ],
      },
    ],
  },
]);

export default router;
