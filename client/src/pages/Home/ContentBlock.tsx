import { Link, useFetcher, Form, useNavigation } from "react-router-dom";
import { base_url } from "../../api/api";

import Spinner from "../../utils/Spinner";
export type MovieProps = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path?: string;
  popularity: number;
  release_date: string;
  genre_ids: Array<number>;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default function ContentBlock({
  title,
  data,
  buttons,
}: {
  title: string;
  data: MovieProps;
  buttons: { title: string; methodName: string }[];
}) {
  let id = 0;

  const fetcher = useFetcher();

  const nav = useNavigation();

  return (
    <div className="p-4">
      <div className="flex items-center justify-start  gap-4">
        <h1 className="mr-6 p-2 text-xl font-bold">{title}</h1>
        <div className="flex rounded-full border-2 ">
          {buttons.map((item, index) => {
            return (
              <Form
                key={index}
                action=""
                method="post"
                id="form1"
                className={` rounded-full  px-3 py-1`}
                onClick={(e) => {
                  e.currentTarget.parentElement
                    ?.querySelectorAll("#form1")
                    .forEach((item) => {
                      item.classList.remove("activeBtnHome");
                    });
                  e.currentTarget.classList.add("activeBtnHome");
                }}
              >
                <input type="hidden" name="type" value={item.methodName} />
                <button>{item.title}</button>
              </Form>
            );
          })}
        </div>
      </div>
      <div className="scb flex overflow-y-scroll scroll-auto bg-slate-700 p-4">
        {nav.state === "loading" ? <Spinner /> : null}
        {data.results.map((item: Movie) => {
          return (
            <Link
              key={item.id}
              to={`/${item.id}/details`}
              className="hover:scale-110 "
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
        })}
      </div>
    </div>
  );
}
