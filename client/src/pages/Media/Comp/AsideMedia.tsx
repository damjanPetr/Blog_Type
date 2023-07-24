import { base_url, base_urlBg } from "../../../api/api";
import { MovieImages, MovieVideos } from "../../../types/types";
import { getFullCountryName } from "../../../utils/func";
import { AiFillLock } from "react-icons/ai";

type Props = {
  data: MovieImages | MovieVideos;
  type: "backdrops" | "posters" | "logos";
};

function AsideMedia({ data, type }: Props) {
  console.log("🚀 ~ file: AsideMedia.tsx:7 ~ data:", data);
  return (
    <div className=" mx-auto flex max-w-7xl flex-wrap items-start justify-between gap-4 p-4">
      {type === "backdrops"
        ? (data as MovieImages).backdrops.map((item, index) => {
            return (
              <div className="min-w-[300px] flex-1 rounded-lg shadow-inner shadow-slate-400 ">
                <img
                  src={base_url + item.file_path}
                  alt="pic"
                  className="aspect-video rounded-t-lg"
                />
                <div className="">
                  <div className="flex items-center justify-between pr-4">
                    <h3 className="mb-1 border-b p-3 text-base">Info</h3>
                    <AiFillLock />
                  </div>
                  <div className="space-y-2 p-4">
                    <label htmlFor="linkTarget " className="mb-2 block text-sm">
                      Size:
                    </label>
                    <a
                      href={base_urlBg + item.file_path}
                      className="hover:underline"
                      id="linkTarget"
                    >
                      {item.height}x {item.width} ✓
                    </a>
                    <label
                      htmlFor="lgOption"
                      className="my-2 block rounded-md text-sm"
                    >
                      Language:
                    </label>
                    {item.iso_639_1 ? (
                      <span className="block rounded-md bg-neutral-200 p-2">
                        {getFullCountryName(item.iso_639_1)}
                      </span>
                    ) : (
                      <span className="block rounded-md bg-neutral-200 p-2">
                        No Language
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}
export default AsideMedia;
