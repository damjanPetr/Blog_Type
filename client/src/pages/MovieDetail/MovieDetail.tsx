import { json, useParams } from "react-router-dom";
import { apiFetchOptions, apiURL } from "../../api/api";

export async function movieDetailLoader() {
  // const response = await fetch(
  // apiURL + `https://api.themoviedb.org/3/movie/${id}`,
  // apiFetchOptions
  // );
  //
  // return response.json();
}

export default function MovieDetail() {
  const play = useParams();
  return <div>{play.movieId}</div>;
}
