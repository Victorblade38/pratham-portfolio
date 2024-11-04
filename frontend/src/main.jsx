import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import AboutSection from "./components/AboutSection/AboutSection.jsx";
import SkillsSection from "./components/SkillsSection/SkillsSection.jsx";
import ProjectSection from "./components/ProjectsSection/ProjectSection.jsx";
import ContactSection from "./components/ContactSection/ContactSection.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      <Route path="" element={<HeroSection />} />
      <Route path="about" element={<AboutSection />} />
      <Route path="skills" element={<SkillsSection />} />
      <Route path="projects" element={<ProjectSection />} />
      <Route path="contact" element={<ContactSection />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
