import "./App.css";
import Home from "./pages/Home";
import AnimatedCursor from "react-animated-cursor";
import Layout from "./Layout/Layout";
import About from "./pages/About";
import { Work } from "./pages/Work";
import Contact from "./pages/Contact";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="works" element={<Work />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={23}
        outerSize={38}
        color="33,63,125"
        outerAlpha={0.2}
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
