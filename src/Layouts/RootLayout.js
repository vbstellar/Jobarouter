import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>JobaRouter</h1>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="about">ABOUT US</NavLink>
          <NavLink to="help">Help</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
