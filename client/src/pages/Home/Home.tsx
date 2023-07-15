/* eslint-disable react-refresh/only-export-components */
import { SetStateAction, useEffect, useState } from "react";
import { apiFetchOptions, apiURL } from "../../api/api";
import ContentBlock, { Props } from "./ContentBlock";
import { json, useLoaderData } from "react-router-dom";

export async function homeLoader(page: number): Promise<Props> {
  const response = await fetch(
    apiURL + `/movie/popular?language=en_US&page=${page}`,
    apiFetchOptions
  );
  // const data = await response.json();
  return response.json();
}
export default function Home() {
  const pay = useLoaderData();

  const [page, setPage] = useState(1);
  const [data, setData] = useState<Props[]>([]);
  // const set1 = data[0].results.slice(0, data.length / 2);
  // const set2 = data[0].results.slice(data.length / 2);
  window.addEventListener("scroll", handleScroll);
  // homeLoader(page).then(function (res) {
  // setData(res);
  // });
  // useEffect(() => {
  // homeLoader(page).then((arg) => setData(arg));
  // setPage(page + 1);
  // }, [data]);
  // useEffect(() => {
  // homeLoader(page).then((arg) => {
  // setData([...data, arg]);
  // console.log(data);
  // });
  // }, [page]);

  function handleScroll() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    console.log(scrollTop, scrollHeight, clientHeight);
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      homeLoader(page).then((arg) => {
        setData([...data, arg]);
        setPage(page + 1);
      });
    }
    // const getdata = async () => {
  }
  return (
    <div onScroll={handleScroll} className="h-screen">
      {data.map((data) => (
        <ContentBlock key={data.page} data={data}></ContentBlock>
      ))}
    </div>
  );
}
