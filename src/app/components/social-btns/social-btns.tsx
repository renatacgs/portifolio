import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";

import "./social-btns.scss"


export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/renatacgs/">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/renata-cristina-b15175187/">
                <LinkedInIcon/>
            </a>
            <a href="https://github.com/renatacgs">
                <GitHubIcon/>
            </a>
        </div>
    )
}