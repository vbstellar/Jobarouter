import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//Components
import Home from "./Components/Home";
import About from "./Components/About";
import Faq from "./Components/help/Faq";
import Contact from "./Components/help/Contact";
import NotFound from "./Components/NoTFound";
import Careers, { careerLoader } from "./Components/Careers/Careers";

//Layout
import RootLayout from "./Layouts/RootLayout";
import HelpLayout from "./Layouts/HelpLayout";
import CareersLayout from "./Layouts/CareerLayouts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="careers" element={<CareersLayout />}>
        <Route index element={<Careers />} loader={careerLoader} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
