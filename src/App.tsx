import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Tetris from "./components/Tetris";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/playground" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Tetris />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/playground/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
