import React from "react"
import profilePic from "../images/solo.jpeg"
import linkedIn from "../images/linkedin1.svg"
import gitHub from "../images/github1.svg"
import email from "../images/mail1.svg"
import twitter from "../images/twitter1.svg"

export default function Home() {
    return(
        <div id = "section--home">
            <div className = "home--left">
                <div className = "underline"></div>
                <h1>Hi, I'm Rashmi</h1>
                <h3>Automation Test Engineer</h3>
                <a href = "#section--contact" className = "home--contactMe-btn">CONTACT ME</a>
                <div className = "home--icons">
                    <a href = "https://www.linkedin.com/in/rashmi-subramani-851b32ba/" target = "_blank"><img src={linkedIn}></img></a>
                    <a href = "https://github.com/RashmiSubramani" target = "_blank"><img src={gitHub}></img></a>
                    <a href = "mailto:rashmisubramani15@gmail.com" target = "_blank"><img src={email}></img></a>
                    <a href = "https://twitter.com/RashmiSubramani" target = "_blank"><img src={twitter}></img></a>
                </div>
                
            </div>
            <div className = "home--right">
                <div className = "box"></div>
                <img src = {profilePic} className = "home--profilePic"></img>
                
            </div>
        </div>
    )
    
}