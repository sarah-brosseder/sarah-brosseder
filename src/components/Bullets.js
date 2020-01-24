import React, { Component } from 'react'
import './Animations.css'
import './Bullets.css'

export default class Bullets extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <>
        <div className="bullets__container">
          <span className="text__sticky">Leistungsspektrum</span>
          <div className="bullets__title-container">
            <h1 className="bullets__headline">
              Hier findest Du eine Auswahl der Themen, die wir gemeinsam in Workshop-Form oder prozessual bearbeiten können. Sprich mich gerne an, wenn das was Du suchst noch nicht dabei ist.
            </h1>
          </div>
          <span className="arrow__sticky"></span>
          <div className="list__container list__container--first">
            <h3 className="list__headline">Für Menschen und Marken:</h3>
            <ul>
              <li className="list__element">Visions-Entwicklung und Ziel-Definition</li>
              <li className="list__element">Strategie - und Positionierungsfragen</li>
              <li className="list__element">Markenentwicklung und -workshops</li>
              <li className="list__element">Umfeld- und Zielgruppenanalysen</li>
              <li className="list__element">Ideen und Konzeption</li>
              <li className="list__element">Content-Strategie und Storytelling</li>
            </ul>
          </div>
          <span className="list__container__arrow"></span>
          <div className="list__container list__container--second">
            <h3 className="list__headline">Für Agenturen und Beratungen:</h3>
            <ul>
              <li className="list__element">Pitch-Lead</li>
              <li className="list__element">Team-Lead</li>
              <li className="list__element">Budgetierung und Projektplanung</li>
              <li className="list__element">Interims-Vertretung</li>
            </ul>
          </div>
        </div>
        <span className="animated-line"></span>
      </>
    )
  }
}
