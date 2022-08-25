import React from "react"
import selenium from "../images/selenium.jpeg"
import cucumber from "../images/cucumber.png"
import cypress from "../images/cypress.jpeg"
import postman from "../images/postman.jpeg"
import java from "../images/java.png"
import testng from "../images/testng.jpeg"
import jira from "../images/jira.jpeg"
import git from "../images/gitlogo.png"

export default function About() {
    return(
        <div id="section--about">
                <div className = "about--container">
                    <div className = "about--title">About me</div>
                    <div className = "underline"></div>
                    <p className = "about--content">Hello, I’m Rashmi and I am currently working in Kissflow as Automation Test Engineer.</p>
                    <p className = "about--content">I’m a focused and self-motivated professional, seeking challenging assignments and responsibilities
                        in and around QA practices to contribute towards the growth of the organization.</p>
                    <p className = "about--content">I hold 4+ years of experience as QA and currently learning Web Development.</p>
                    <br></br>
                    <br></br>
                    <div className = "about--title">Skills</div>
                    <div className = "underline"></div>
                    <div className = "skills--container">
                        <div className = "skills--all">
                            <div className = "skills-box">
                                <img src = {selenium} className = "skills-img"></img>
                                <h4>Selenium</h4>
                            </div>
                            <div className = "skills-box">
                                <img src = {cucumber} className = "skills-img"></img>
                                <h4>Cucumber</h4>
                            </div>
                            <div className = "skills-box">
                                <img src = {cypress} className = "skills-img"></img>
                                <h4>Cypress</h4>
                            </div>
                            <div className = "skills-box">
                                <img src = {postman} className = "skills-img"></img>
                                <h4>Postman</h4>
                            </div>
                            <div className = "skills-box">
                                <img src = {java} className = "skills-img"></img>
                                <h4>Java</h4>
                            </div>
                            <div className = "skills-box">
                                <img src = {testng} className = "skills-img"></img>
                                <h4>TestNG</h4>
                            </div>
                            <div className = "skills-box">
                                <img src = {jira} className = "skills-img"></img>
                                <h4>Jira</h4>
                            </div>
                            <div className = "skills-box">
                                <img src = {git} className = "skills-img"></img>
                                <h4>Git</h4>
                            </div>
                        </div>
                    </div>
                
                </div>
        </div>
    )
    
}