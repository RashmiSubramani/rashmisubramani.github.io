import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import {
  HomePage,
  AboutPage,
  ExperiencePage,
  SkillsPage,
  ProjectsPage,
  CertificationsPage,
  ContactPage,
} from "./pages";
import { GlobalStyles } from "./styles/GlobalStyles";
import "./styles/global.css";

export default function Portfolio() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="skills" element={<SkillsPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="certifications" element={<CertificationsPage />} />
            <Route path="experience" element={<ExperiencePage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
