import React from "react"
import {EXPERIENCE} from "./data.js"

export default function Experience() {
    console.log(EXPERIENCE)
    return(
        <div id = "section--experience">
            <div className = "experience--container">
                <div className = "experience--title">Experience</div>
                <div className = "underline"></div> 
                <div className = "experience--list">
                    {EXPERIENCE.map(item => {
                        return (  
                                <div className = "experience--tree">
                                    <div className = "company--details">
                                        <div className = "year">{item.year}</div>
                                        <div className = "card--details">
                                            <div className = "company">{item.company}</div>
                                            <div className = "designation">{item.designation}</div>
                                        </div>
                                    </div>

                                    <div className = "company--details">
                                        <div className = "year">{item.year}</div>
                                        <div className = "card--details">
                                            <div className = "company">{item.company}</div>
                                            <div className = "designation">{item.designation}</div>
                                        </div>
                                    </div>
                                </div>   
                        )
                    })}
                    <div className = "vertical--line"></div>
                </div>
            </div>
        </div>
    ) 
    
}

// const cards = data.map(item => {
//     return (
//         <Card 
//                 key = {item.id}
//                 item = {item}
//             />
//     )
// })

