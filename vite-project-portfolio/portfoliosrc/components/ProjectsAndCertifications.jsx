import React from "react"
import { CERTIFICATIONS } from "./data"

export default function ProjectsAndCertifications() {
    console.log(CERTIFICATIONS)
    return (
        <div id = "section--projectsAndCertifications">
            <div className = "certifications--container">
                <div className = "certifications--title">Certifications</div>
                <div className = "underline"></div>
            </div>  
            <div className = "certifications--tree">
            {CERTIFICATIONS.map(item => {
                return (
                    <div className = "certifications--timeline--item">
                        <h4 className = "certifications--timeline--year">{item.completionYear}</h4>
                        <p className = "certifications--timeline--name">{item.certificationName}</p>
                        <p className = "certifications--timeline--description">{item.certificateDescription}</p>
                        <span className = "certifications--number">{item.number}</span>
                    </div>
                )
            })} 
            </div> 
        </div>
    )
}

