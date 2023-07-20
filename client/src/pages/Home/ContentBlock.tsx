import { useState, useEffect, useRef } from "react";

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

export default function ContentBlock({
  data,
  dataid,
  ref,
}: {
  data: Props;
  dataid: number;
  ref: HTMLAnchorElement | Ref<HTMLAnchorElement>;
}) {
  const [IsLoading, setIsLoading] = useState(true);
  const target = useRef<HTMLAnchorElement>(null);
  let id = 0;

  useEffect(() => {
    setIsLoading(false);
    return () => {
      setIsLoading(false);
    };
  }, [IsLoading]);
  //

  return (
    <div
      className="scb flex overflow-y-scroll scroll-auto bg-slate-700 p-4"
      data-id={dataid}
    >
      {!IsLoading ? (
        data.results.map((item: Movie) => {
          return (
            <Link
              ref={ref}
              key={item.id}
              to={`/${item.id}/details`}
              className="hover:scale-110"
              data-index={id++}
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
