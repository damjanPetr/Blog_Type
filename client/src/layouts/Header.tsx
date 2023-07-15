import { Outlet, NavLink } from "react-router-dom";
import { useAuth } from "../context/Auth";

export default function Nav() {
  const user = useAuth();
  return (
    <div>
      <header className="flex items-center p-1">
        <div className="logo ml-4">
          <h1>MovieTemplate</h1>
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

      <Outlet />
    </div>
  );
}
