/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect, useRef } from "react";
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
  const mytarget = useRef<HTMLAnchorElement>(null);
  let id = 0;
  const initialData = useLoaderData() as Props[];
  const [page, setPage] = useState(5);
  const [data, setData] = useState<Props[]>(initialData);

  function handleScroll() {
    const { scrollTop, scrollHeight, clientHeight, offsetHeight } =
      document.documentElement;

    if (scrollTop + clientHeight > scrollHeight - offsetHeight * 0.3) {
      homeLoader(page).then((arg) => {
        setData([...data, arg]);
      });
      setPage(page + 1);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  // if (navigation.state === "loading") {
  // return <div className="h-screen bg-purple-600"></div>;
  // }
  return (
    <main onScroll={handleScroll} className="h-screen">
      {data.map((items) => {
        if (navigation.state === "loading") {
          return <Spinner key={`spinner ${items.page}`} />;
        } else {
          return (
            <ContentBlock
              key={items.page}
              data={items}
              dataid={id++}
              ref={mytarget}
            ></ContentBlock>
          );
        }
      })}
    </main>
  );
}
