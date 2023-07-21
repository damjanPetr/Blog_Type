import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import { MovieAltTitles, MovieDetails } from "../../../types/types";
import { getFlag, getFullCountryName } from "../../../utils/func";

// type Props = {};
export default function AlternativeTitles() {
  const { details, altTitles } = useLoaderData() as {
    details: MovieDetails;
    altTitles: MovieAltTitles;
  };

  type filterArray = Record<
    string,
    {
      iso_3166_1: string;
      title: string;
      type: string;
    }[]
  >;

  const groups: filterArray = {};

  for (let index = 0; index < altTitles.titles.length; index++) {
    const element = altTitles.titles[index];
    const flagId = altTitles.titles[index].iso_3166_1;
    if (!groups[flagId]) {
      groups[flagId] = [];
    }
    groups[flagId].push(element);
  }

  const dataLoop = Object.entries(groups).map((item, index) => {
    const flagId = item[0];
    const titles = item[1].map((value, index) => {
      if (value !== undefined) return value;
    });
    console.log(titles);
    return { flagId, titles };
  });

  return (
    <>
      <Banner movieDetail={details} />
      <main className="mx-auto grid w-10/12 grid-cols-[30%_70%] p-4">
        <aside className=" p-4">
          <section className="rounded-xl">
            <div className="flex w-full items-center justify-between bg-slate-900 px-4 py-2 text-center text-white">
              <h1 className=" text-xl">Alternative Titles </h1>
              <span className="p-2 text-xl text-gray-400 ">
                {altTitles.titles.length}
              </span>
            </div>
            <div className=" shadow-md">
              {dataLoop.map((item, index) => {
                // const newArray = altTitles.titles.filter(
                // (element) => element.title === item.title
                // );
                return (
                  <div
                    key={`sidebar-key ${index}`}
                    className="justify-center p-2 hover:bg-slate-200"
                  >
                    <a href={`#goLink${item.flagId}`}>
                      <div className="flex items-center justify-between px-6">
                        <p>{getFullCountryName(item.flagId)}</p>
                        <p>{item.titles.length}</p>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </section>
        </aside>
        <article className="p-4 ">
          {dataLoop.map((data, index) => {
            if (data !== undefined) {
              return (
                <table
                  key={`article-key ${(data.flagId, index)} `}
                  className="mb-4 w-full shadow-lg "
                >
                  <caption
                    className="bg-brown-300 p-2 pl-2 text-left"
                    id={`goLink${data.flagId}`}
                  >
                    <img
                      src={getFlag(data.flagId)}
                      alt=""
                      className="mr-4 inline-block "
                    />
                    <p className="inline">{getFullCountryName(data.flagId)}</p>
                  </caption>
                  <thead className="">
                    <tr className="border-collapse bg-zinc-200 p-1  ">
                      <th className="pl-4 text-lg font-bold">Title</th>
                      <th className="pr-4 text-lg font-bold">Type</th>
                    </tr>
                  </thead>
                  <tbody className="flex justify-around p-1 ">
                    {data.titles.map((item) => {
                      return (
                        <tr className="flex flex-col bg-blue-300 ">
                          <td>{item?.title}</td>
                          <td className="">{item?.type}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              );
            }
          })}
        </article>
      </main>
    </>
  );
}
