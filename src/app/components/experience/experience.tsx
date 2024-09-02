import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
          <p>2 anos trabalhando como SRE na NTTDATA Brasil, com experiência anterior de 2 anos em Front-End.</p>
          <div className="experience-time">
            <Skill image="/react.png" measure={1} years="1 years"/>
            <Skill image="/ts.png" measure={2} years="2 years"/>
            <Skill image="/js.png" measure={2} years="2 years"/>
            <Skill image="/angular.png" measure={1} years="1 year"/>
            <Skill image="/aws.jpg" measure={2} years="2 year"/>
            
            <Skill image="/docker.png" measure={2} years="2 year"/>
            <Skill image="/grafana.jfif" measure={2} years="2 year"/>
            <Skill image="/kubernets.png" measure={2} years="2 year"/>

          </div>
        </div>
    )
}