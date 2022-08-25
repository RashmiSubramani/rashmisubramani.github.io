import React from "react"
import linkedIn from "../images/linkedin1.svg"
import gitHub from "../images/github1.svg"
import email from "../images/mail1.svg"
import twitter from "../images/twitter1.svg"


export default function Contact() {
    const sendEmail = (e) => {
        var message = document.getElementById("message").value;
        window.location.href = "mailto:rashmisubramani15@gmail.com?subject=Would%20Like%20to%20Connect%20with%20you&body="+message+"&cc=pmramprasad@gmail.com";
        e.preventDefault();
        console.log(window.location.href);
    }
    return(
        <div id = "section--contact">
            <div className = "contact--container">
                <div className = "contact--title">Contact me</div>
                <div className = "underline"></div>
                
                <div className = "contact--form--container">
                    <form className = "contact--form" onSubmit = {sendEmail} target = "_blank" method = "GET">
                        <input type = "text" id = "name" placeholder = "Enter your Name" className = "contact--form--input" required></input>
                        <input type = "email" id = "email" placeholder = "Enter your Email" className = "contact--form--input" required></input>
                        <textarea type = "text" id = "message" placeholder = "Enter your Message" className = "contact--form--input contact--message" required></textarea>
                        <button type = "submit" className = "contact--form--btn">Submit
                            {/* <a href = "mailto:rashmisubramani15@gmail.com">Submit</a> */}
                        </button>
                    </form>
                </div>
                <div className = "home--icons contact--icons">
                    <a href = "https://www.linkedin.com/in/rashmi-subramani-851b32ba/" target = "_blank"><img src={linkedIn}></img></a>
                    <a href = "https://github.com/RashmiSubramani" target = "_blank"><img src={gitHub}></img></a>
                    <a href = "mailto:rashmisubramani15@gmail.com" target = "_blank"><img src={email}></img></a>
                    <a href = "https://twitter.com/RashmiSubramani" target = "_blank"><img src={twitter}></img></a>
                </div>
            </div>

        </div>
    )
    
}