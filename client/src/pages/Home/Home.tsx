/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect, useCallback, useMemo } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import { apiFetchOptions, apiURL } from "../../api/api";
import ContentBlock, { Props } from "./ContentBlock";
import Spinner from "../../utils/Spinner";

export async function homeLoader(page: number): Promise<Props> {
  const response = await fetch(
    apiURL + `/movie/popular?language=en_US&page=${page}`,
    apiFetchOptions
  );
  const data = await response.json();
  return data;
}

export default function Home() {
  const navigation = useNavigation();
  const initialData = useLoaderData() as Props;
  const [page, setPage] = useState(2);
  const [data, setData] = useState<Props[]>([initialData]);
  console.log("🚀 ~ file: Home.tsx:20 ~ Home ~ data:", data);

  function handleScroll() {
    const { scrollTop, scrollHeight, clientHeight, offsetHeight } =
      document.documentElement;
    // console.group("label");
    // console.log("scroll top " + scrollTop);
    // console.log("client h " + clientHeight);
    // console.log("scroll h " + scrollHeight);
    // console.log("offset h " + offsetHeight);
    // console.groupEnd();
    if (scrollTop + clientHeight > scrollHeight - offsetHeight * 0.2) {
      homeLoader(page).then((arg) => {
        setData([...data, arg]);
      });
      setPage(page + 1);
    }
  }

  useEffect(() => {
    console.log("mount");
    window.addEventListener("scroll", handleScroll);
    return () => {
      console.log("unmoount");
      window.removeEventListener("scroll", handleScroll);
    };
  });
  // if (navigation.state === "loading") {
  // return <div className="h-screen bg-purple-600"></div>;
  // }
  return (
    <div onScroll={handleScroll} className="h-screen">
      {data.map((items) => {
        if (navigation.state === "loading") {
          return <Spinner key={`spinner ${items.page}`} />;
        } else {
          return <ContentBlock key={items.page} data={items}></ContentBlock>;
        }
      })}
    </div>
  );
}
