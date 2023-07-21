/* eslint-disable react-refresh/only-export-components */
import { useCallback, useEffect, useRef, useState } from "react";
import { useFetcher, useLoaderData, useNavigation } from "react-router-dom";
import { apiFetchOptions, apiURL } from "../../api/api";
import Spinner from "../../utils/Spinner";
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
  const navigation = useNavigation();
  const mytarget = useRef<HTMLAnchorElement>(null);
  let id = 0;

  const initialData = useLoaderData() as Props[];

  const [page, setPage] = useState(5);
  const [data, setData] = useState<Props[]>(initialData);

  const handleScroll = useCallback(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight, offsetHeight } =
        document.documentElement;

      if (scrollTop + clientHeight > scrollHeight - offsetHeight * 0.3) {
        homeLoader(page).then((arg) => {
          setPage(page + 1);
          setData([...data, arg]);
        });
      }
    };
    handleScroll();
  }, [data, page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <main className="h-screen">
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
