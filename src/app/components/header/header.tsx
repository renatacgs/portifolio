import Image from 'next/image'

import "./header.scss"

export function Header(){
    return(
        <div className="header">
          <div>
            <h1>Olá, eu sou a Renata! 👋</h1>
            <h2>SRE/Front-end</h2>
          </div>
          <Image
            src="/renata.jpg"
            alt="Vercel Logo"
            width={325}
            height={310}
            priority
          />
        </div>
    )
}