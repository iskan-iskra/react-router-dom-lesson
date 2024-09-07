import { useCallback } from "react";
import { NavLink, Outlet } from "react-router-dom";

const AppLayout = () => {
  const activateLink = useCallback(
    ({ isActive }) => (isActive ? { color: "red" } : { color: "blue" }),
    []
  );
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/" style={activateLink}>
                main
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" style={activateLink}>
                about
              </NavLink>
            </li>
            <li>
              <NavLink to="/posts" style={activateLink}>
                posts
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
