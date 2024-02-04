import "./App.css";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import CV from "./components/CV";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="cv" element={<CV />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
