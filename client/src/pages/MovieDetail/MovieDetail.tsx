import { useLoaderData } from "react-router-dom";
import { apiFetchOptions, apiURL } from "../../api/api";
import { MovieDetails } from "../../types/types";

export async function movieDetailLoader<T>(id: T) {
  const response = await fetch(apiURL + `/movie/${id}`, apiFetchOptions);
  return response.json();
}

export default function MovieDetail() {
  const movieDetail = useLoaderData() as MovieDetails;
  return (
    <div className="container border">
      <header className="flex justify-center">
        <nav className="border">
          <ul className="flex gap-4 bg-teal-500 capitalize text-yellow-400">
            <li>overview</li>
            <li>Media</li>
            <li>Fandom</li>
            <li>Share</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
