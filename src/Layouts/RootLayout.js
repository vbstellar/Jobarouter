import { Outlet, NavLink } from "react-router-dom";
import Breadcrums from "../components/Breadcrums";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Jobarouter</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="careers">Careers</NavLink>
        </nav>
        <Breadcrums></Breadcrums>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
