import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as { message: string; statusText: string };

  return (
    <div className="h-screen">
      <div className="desc mx-auto">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </div>
      <div className="">
        <p>{error.message || error.statusText}</p>
      </div>
    </div>
  );
}
