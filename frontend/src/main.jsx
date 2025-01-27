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
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectSection,
  ContactSection,
} from "./components.js";
import App from "./App.jsx";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="" element={<Layout />}>
//       <Route path="" element={<HeroSection />} />
//       <Route path="/about" element={<AboutSection />} />
//       <Route path="/skills" element={<SkillsSection />} />
//       <Route path="/projects" element={<ProjectSection />} />
//       <Route path="/contact" element={<ContactSection />} />
//       <Route path="*" element={<div>Not Found</div>} />
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
