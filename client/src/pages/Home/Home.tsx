/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect, useCallback } from "react";
import { useLoaderData } from "react-router-dom";
import { apiFetchOptions, apiURL } from "../../api/api";
import ContentBlock, { Props } from "./ContentBlock";

export async function homeLoader(page: number): Promise<Props> {
  const response = await fetch(
    apiURL + `/movie/popular?language=en_US&page=${page}`,
    apiFetchOptions
  );
  const data = await response.json();
  return data;
}

export default function Home() {
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
    if (scrollTop + clientHeight > scrollHeight - 10) {
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

  return (
    <div onScroll={handleScroll} className="h-screen">
      {data.map((items) => (
        <ContentBlock key={items.page} data={items}></ContentBlock>
      ))}
    </div>
  );
}
