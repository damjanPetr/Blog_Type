import { Link, NavLink, useNavigation } from "react-router-dom";
import { useAuth } from "../context/Auth";

export default function Nav() {
  const user = useAuth();
  const nav1 = useNavigation();
  return (
    <header className="flex items-center bg-indigo-400 p-1">
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="fixed top-0 w-full bg-red-800 text-white">
        {nav1.state === "loading" && (
          <progress className="h2 fixed top-0 w-full bg-red-600 text-blue-600">
            Loading
          </progress>
        )}
        {JSON.stringify(nav1.state)}
      </div>
      <div className="logo ml-4">
        <Link to="/">
          <h1>MovieTemplate</h1>
        </Link>
      </div>
      <nav className="ml-auto mr-4">
        <ul>
          {user ? (
            <li className="ml-auto p-1 first-letter:underline first-letter:underline-offset-2">
              <NavLink to={"/login"} className="">
                Login
              </NavLink>
            </li>
          ) : (
            <li className="p-1 first-letter:underline first-letter:underline-offset-2 ">
              <NavLink to={"/register"}>Register</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
