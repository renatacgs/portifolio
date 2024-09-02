import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Idiomas"/>
        <div className="languages-info">
          <span>Português - Nativo</span>
          <span>Inglês - Avançado</span>
          <span>Espanhol - Intermediário</span>
        </div>
        <SectionTitle text="Educação"/>
        <div className="educational-info">
          <span>🎓</span>
          <span>Sistemas de Informação - Universidade de Uberaba</span>
        </div>
      </div>
    )
}