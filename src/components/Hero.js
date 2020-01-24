import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className="hero__container">
      <h1>Hallo, ich bin <span className="text__underlined">Sarah</span>.<br/>Ich biete <span className="text__underlined">kreative Strategie</span> und <span className="text__underlined">Beratung</span> für <span className="text__underlined">Menschen</span> und <span className="text__underlined">Marken</span> an. Gemeinsam arbeiten wir an <span className="text__underlined">Positionierungsfragen</span>, <span className="text__underlined">Visionen</span> und <span className="text__underlined">Zielen</span> und daran, wie der <span className="text__underlined">Weg dorthin</span> aussehen kann.</h1>
    </div>
  )
}

export default Hero
