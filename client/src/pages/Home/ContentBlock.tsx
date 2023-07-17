import { Link, useNavigation } from "react-router-dom";
import { base_url } from "../../api/api";

export type Props = {
  page: number;
  results: movie[];
  total_pages: number;
  total_results: number;
};

export interface movie {
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
  const navigation = useNavigation();
  return (
    <>
      {navigation.state == "loading" ? <div>tueoahueoatnuhtehatnun</div> : null}
      {data.results && navigation.state === "idle" && (
        <div className="scb flex overflow-auto bg-slate-700 p-4">
          {data.results.map((item: movie) => {
            return (
              <Link key={item.id} to={`/${item.id}/details`}>
                <div className="">
                  <div className="scb ml-4 w-max">
                    <img
                      src={base_url + item.poster_path}
                      alt={item.title + "image"}
                      className="w-[100px] rounded-lg"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
