import { createBrowserRouter, defer } from "react-router-dom";
import ErrorPage from "./ErrorPage.tsx";
import {
  apiFetchOptions,
  getAltTitles,
  getChanges,
  getCredits,
  getMovieReleaseDate,
  getTranslations,
} from "./api/api.ts";
import { AuthProvider } from "./context/Auth.tsx";
import Main from "./layouts/Main.tsx";
import ContentIssues from "./pages/Discussion/ContentIssues/ContentIssues.tsx";
import General from "./pages/Discussion/General/General.tsx";
import Overview from "./pages/Discussion/Overview/Overview.tsx";
import Home, { homeLoader as getDetails } from "./pages/Home/Home.tsx";
import Login from "./pages/Login/Login.tsx";
import Backdrops from "./pages/Media/Backdrops/Backdrops.tsx";
import Logos from "./pages/Media/Logos/Logos.tsx";
import Posters from "./pages/Media/Posters/Posters.tsx";
import BehindTheScenes from "./pages/Media/Videos/BehindTheScenes/BehindTheScenes.tsx";
import Clips from "./pages/Media/Videos/Clips/Clips.tsx";
import Featuretess from "./pages/Media/Videos/Featuretess/Featuretess.tsx";
import Teasers from "./pages/Media/Videos/Teasers/Teasers.tsx";
import Trailers from "./pages/Media/Videos/Trailers/Trailers.tsx";
import AlternativeTitles from "./pages/MovieDetail/AlternativeTitles/AlternativeTitles.tsx";
import CastCrew from "./pages/MovieDetail/CastCrew/CastCrew.tsx";
import Changes from "./pages/MovieDetail/Changes/Changes.tsx";
import Edit from "./pages/MovieDetail/Edit/Edit.tsx";
import MovieDetail, {
  movieDetailLoader,
} from "./pages/MovieDetail/Main/MovieDetail.tsx";
import ReleaseDate from "./pages/MovieDetail/ReleaseDate/ReleaseDate.tsx";
import Report from "./pages/MovieDetail/Report/Report.tsx";
import Translations from "./pages/MovieDetail/Translations/Translations.tsx";
import Reviews from "./pages/Reviews/Reviews.tsx";
import { MovieAltTitles, MovieDetails } from "./types/types.tsx";

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
                const results = await getDetails(index);
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
              const details = (await movieDetailLoader(
                params.movieId
              )) as MovieDetails;
              return { details, altTitles };
            },
          },
          {
            path: "/:movieId/cast-crew",
            element: <CastCrew />,
            loader: async ({ params }) => {
              const castCrew = await getCredits(params.movieId);

              const details = await movieDetailLoader(params.movieId);

              return {
                castCrew,
                details,
              };
            },
          },
          {
            path: "/:movieId/release-date",
            element: <ReleaseDate />,
            loader: async ({ params }) => {
              const data = await getMovieReleaseDate(params.movieId);
              const details = await movieDetailLoader(params.movieId);

              return { data, details };
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
            loader: ({ params }) => {
              const data = getChanges(params.movieId);
              return data;
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
