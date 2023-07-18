import { Link } from "react-router-dom";
import { getImages, getVideos } from "../../../api/api";

type Props = {
  data: string;
};
export async function MediaBarLoader(movieId) {
  const videos = await getVideos(movieId);
  const images = await getImages(movieId);
  return { videos, images };
}
export default function MediaBar({ data }: Props) {
  return (
    <div className="mediaBar ">
      <header className="flex items-center ">
        <div className="logo">
          <h3>Media</h3>
        </div>
        <nav className="ml-auto mr-8">
          <ul className="ml-auto flex gap-4">
            <Link to={"/"}>
              <li>Most Popular</li>
            </Link>
            <Link to={"/"}>
              <li>Videos</li>
            </Link>
            <Link to={"/"}>
              <li>Backdrops</li>
            </Link>
            <Link to={"/"}>
              <li>Posters</li>
            </Link>
            <Link to={"/"}>
              <li></li>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
}
