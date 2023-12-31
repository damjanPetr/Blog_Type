/* eslint-disable react-refresh/only-export-components */
import { useEffect, useRef, useState } from "react";
import { useActionData, useLoaderData } from "react-router-dom";
import ContentBlock from "./ContentBlock";
import { MovieWithMedaType } from "../../types/types";

export default function Home() {
  const mytarget = useRef<HTMLDivElement>(null);

  const { popular, trending, getPTV } = useLoaderData() as {
    popular: MovieWithMedaType;
    trending: MovieWithMedaType;
    getPTV: MovieWithMedaType;
  };

  const [data, setData] = useState(popular);
  const [data2, setData2] = useState(trending);
  const [data3, setData3] = useState(getPTV);

  const { actionData, forBlock } =
    (useActionData() as {
      actionData: MovieWithMedaType;
      forBlock: "trending" | "whatspopular" | "free_to_watch";
    }) || {};

  useEffect(() => {
    if (forBlock === "trending") {
      setData(actionData);
    }
    if (forBlock === "whatspopular") {
      setData2(actionData);
    }
    if (forBlock === "free_to_watch") {
      setData3(actionData);
    }
  }, [actionData, forBlock]);

  return (
    <div className="mx-auto max-w-screen-2xl">
      <section
        className="flex flex-col items-start justify-center bg-blue-600
        p-14"
      >
        <div className="flex flex-col items-start justify-between p-4 font-bold text-white ">
          <h1 className="mb-4 text-5xl">Welcome.</h1>
          <h2 className="text-3xl">
            Millions of movies, TV shows and people to discover. Explore now.
          </h2>
        </div>
        <div className="w-full p-4">
          <div className="relative flex ">
            <form className="w-full">
              <input
                type="text"
                name="search"
                id="search"
                className=" w-full rounded-full  p-4 text-xl  capitalize outline-none placeholder:italic placeholder:tracking-wide placeholder:text-gray-600 "
                placeholder="search for a movie, tv show,person..."
              />
              <button className="absolute right-0 h-full w-40   rounded-full bg-gradient-to-r from-teal-500  to-teal-600 text-lg font-bold text-white outline-none hover:text-gray-800">
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      <main className="" ref={mytarget}>
        <ContentBlock
          title="Trending"
          data={data}
          buttons={[
            {
              title: "Today",
              methodName: "trendingToday",
            },
            {
              title: "This Week",
              methodName: "trendingWeek",
            },
          ]}
        ></ContentBlock>
        <ContentBlock
          title="What's Popular"
          data={data2}
          buttons={[
            {
              title: "Streaming",
              methodName: "streaming",
            },
            {
              title: "On TV",
              methodName: "on_tv",
            },
            {
              title: "For Rent",
              methodName: "for_rent",
            },
            {
              title: "In Theathers",
              methodName: "in_theathers",
            },
          ]}
        ></ContentBlock>
        <ContentBlock
          title="Free To Watch"
          data={data3}
          buttons={[
            {
              title: "Movies",
              methodName: "free_movies",
            },
            {
              title: "TV",
              methodName: "free_tv",
            },
          ]}
        ></ContentBlock>
      </main>
    </div>
  );
}
