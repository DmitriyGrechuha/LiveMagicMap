import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPageBuild from "./components/Pages/mainPage";
import PagePolotskBuild from "./components/Pages/PagePolotskBuild";
import PageVitebskBuild from "./components/Pages/PageVitebskBuild";
import PageMogilevBuild from "./components/Pages/PageMogilevBuild";
import PageMinskBuild from "./components/Pages/PageMinskBuild";
import PageGrodnoBuild from "./components/Pages/PageGrodnoBuild";
import PageGomelBuild from "./components/Pages/PageGomelBuild";
import PageBrestBuild from "./components/Pages/PageBrestBuild";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPageBuild />} />
        <Route path="Polotsk" element={<PagePolotskBuild />} />
        <Route path="Vitebsk" element={<PageVitebskBuild />} />
        <Route path="Mogilev" element={<PageMogilevBuild />} />
        <Route path="Minsk" element={<PageMinskBuild />} />
        <Route path="Grodno" element={<PageGrodnoBuild />} />
        <Route path="Gomel" element={<PageGomelBuild />} />
        <Route path="Brest" element={<PageBrestBuild />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
