import React from "react"
import logo from "../images/photoLogo.png"

export default function TopNav() {
    return(
        <div className = "topNav">
            <img src = {logo} className = "topNav--logo"></img>
            <nav>
                <ul className = "topNav--links">
                    <li><a href = "#section--home">Home</a></li>
                    <li><a href = "#section--about">About</a></li>
                    <li><a href = "#section--experience">Experience</a></li>
                    <li><a href = "#section--projectsAndCertifications">Projects & Certifications</a></li>
                    <li><a href = "#section--contact">Contact</a></li>
                </ul>
            </nav>
            {/* <div>Toggle</div> */}
        </div>
    )
}
