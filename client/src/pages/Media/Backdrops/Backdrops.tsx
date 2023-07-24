import { useLoaderData } from "react-router-dom";
import { MovieDetails, MovieImages } from "../../../types/types";
import Banner from "../../components/Banner";
import AsideMedia from "../Comp/AsideMedia";

export default function Backdrops() {
  const { data, details } = useLoaderData() as {
    data: MovieImages;
    details: MovieDetails;
  };


  return (
    <>
      <Banner movieDetail={details} />

      <AsideMedia data={data} type="backdrops" />
    </>
  );
}
