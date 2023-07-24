import { MovieReleaseDate } from "../../types/types";
import {
  getCountryLanguage,
  getFlag,
  getFullCountryName,
} from "../../utils/func";
import {
  filterArrayTitles,
  minaltTitles,
} from "../MovieDetail/AlternativeTitles/AlternativeTitles";
import { minReleaseDate } from "../MovieDetail/ReleaseDate/ReleaseDate";

type Props = {
  data: {
    [x: string]: minaltTitles[] | minReleaseDate[];
  };
};

function Table({ data }: Props) {
  // console.log("🚀 ~ file: Table.tsx:11 ~ Table ~ data:", data);

  const dataObject = Object.entries(data);
  // console.log("🚀 ~ file: Table.tsx:22 ~ Table ~ dataObject:", dataObject);
  // const dataObject = check();
  return (
    <article className="p-4 ">
      {dataObject.map((item, index) => {
        console.log("🚀 ~ file: Table.tsx:33 ~ {dataObject.map ~ item:", item);
        return (
          <table
            key={`article-key ${(item[0], index)} `}
            className="mb-4 w-full shadow-lg "
          >
            <caption
              className="bg-brown-300 p-2 pl-2 text-left"
              id={`goLink${item[0]}`}
            >
              <img
                src={getFlag(item[0])}
                alt=""
                className="mr-4 inline-block "
              />
              <p className="inline">{getFullCountryName(item[0])}</p>
            </caption>
            <thead className="">
              <tr className="border-collapse bg-zinc-200 p-1  ">
                {"title" in item[1][0] ? (
                  <>
                    <th className="pl-4 text-lg font-bold">Title</th>
                    <th className="pr-4 text-lg font-bold">Type</th>
                  </>
                ) : null}
                {"certification" in item[1][0] ? (
                  <>
                    <th className="pl-4 text-lg font-bold">Date</th>
                    <th className="pl-4 text-lg font-bold">Certification</th>
                    <th className="pl-4 text-lg font-bold">Type</th>
                    <th className="pr-4 text-lg font-bold">Language</th>
                    <th className="pr-4 text-lg font-bold">Note</th>
                  </>
                ) : null}
              </tr>
            </thead>
            <tbody className=" p-1 ">
              {"title" in item[1][0]
                ? item[1].map((item) => {
                    return (
                      <tr className=" bg-blue-300 ">
                        <td>{item.type}</td>
                        <td className="">{item?.type}</td>
                      </tr>
                    );
                  })
                : null}
              {"certification" in item[1][0] ? (
                <tr className="w-full ">
                  <td>{item[1][0].release_date}</td>
                  <td>{item[1][0].certification}</td>
                  <td>{item[1][0].type}</td>
                  <td>{}</td>
                  {/* <td>{getCountryLanguage(item[1][0].iso_639_1)}</td> */}
                  {/* <td>{item[1][0].descriptors}</td> */}
                  <td>{item[1][0].note}</td>
                </tr>
              ) : null}
            </tbody>
          </table>
        );
      })}
    </article>
  );
}
export default Table;
