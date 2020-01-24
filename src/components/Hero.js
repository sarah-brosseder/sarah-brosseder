import React, { Component } from 'react'
import './Hero.css'

export default class Hero extends Component {

  scrollToAbout() {
    document.querySelector('#about-anchor').scrollIntoView({
      behavior: 'smooth'
    })
  }

  scrollToCta() {
    document.querySelector('#cta-anchor').scrollIntoView({
      behavior: 'smooth'
    })
  }

  scrollToNetwork() {
    document.querySelector('#network-anchor').scrollIntoView({
      behavior: 'smooth'
    })
  }

  scrollToCopy() {
    document.querySelector('#copy-anchor').scrollIntoView({
      behavior: 'smooth'
    })
  }

  scrollToBullets() {
    document.querySelector('#bullets-anchor').scrollIntoView({
      behavior: 'smooth'
    })
  }

  render() {
    return (
      <>
        <span className="text__sticky">Beratung und kreative Strategie</span>
        <div className="hero__container">
          <h1>Hallo, ich bin <span onClick={this.scrollToAbout} className="text__underlined">Sarah</span>.<br/>Ich biete <span className="text__underlined">kreative Strategie</span> und <span className="text__underlined">Beratung</span> für <span className="text__underlined">Menschen</span> und <span className="text__underlined">Marken</span> an. Gemeinsam arbeiten wir an <span className="text__underlined">Positionierungsfragen</span>, <span className="text__underlined">Visionen</span> und <span className="text__underlined">Zielen</span> und daran, wie der <span className="text__underlined">Weg dorthin</span> aussehen kann.</h1>
        </div>
        <span className="animated-line"></span>
      </>
    )
  }
}
