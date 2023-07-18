import { useState, useEffect } from "react";

import { Link, useNavigation } from "react-router-dom";

import { base_url } from "../../api/api";
import Spinner from "../../utils/Spinner";

export type Props = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default function ContentBlock({ data }: { data: Props }) {
  const [IsLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
    return () => {
      setIsLoading(false);
    };
  }, [IsLoading]);

  return (
    <div className="scb flex overflow-auto bg-slate-700 p-4">
      {!IsLoading ? (
        data.results.map((item: Movie) => {
          return (
            <Link
              key={item.id}
              to={`/${item.id}/details`}
              className="hover:scale-110"
            >
              <div className="">
                <div className="scb ml-4 w-max">
                  <img
                    src={base_url + item.poster_path}
                    alt={item.title + "image"}
                    className="w-[140px] rounded-lg"
                  />
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
}
