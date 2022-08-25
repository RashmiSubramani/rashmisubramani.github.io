import React from "react"
import TopNav from "./components/TopNav"
import Home from "./components/Home"
import About from "./components/About"
import Experience from "./components/Experience"
import ProjectsAndCertifications from "./components/ProjectsAndCertifications"
import Contact from "./components/Contact"
import "./style.css"

export default function Portfolio() {
    return(
        <div>
            <TopNav />
            <Home />
            <About />
            <Experience />
            <ProjectsAndCertifications />
            <Contact />
        </div>
    )
}