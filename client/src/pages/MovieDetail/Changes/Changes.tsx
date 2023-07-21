import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";

export default function Changes() {
  const data = useLoaderData();
  return (
    <>
      <Banner />
      <div>Changes</div>
      <>{JSON.stringify(data)}</>
    </>
  );
}
