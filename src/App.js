import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

//Components
import Home from "./Components/Home";
import About from "./Components/About";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>JobaRouter</h1>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="about">ABOUT US</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
