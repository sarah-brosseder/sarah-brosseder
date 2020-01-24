import React, { Component } from 'react'
import './Animations.css'
import './Copy.css'

export default class Copy extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    const copyMenuTitle = document.querySelector('#sticky-copy')
    const heroMenuTitle = document.querySelector('#sticky-hero')
    const copyTitle = document.querySelector('#copy-title')
    const rect = copyTitle.getBoundingClientRect()
    if (rect.y <= 83) {
      heroMenuTitle.classList.add('is-animated-out')
      window.setTimeout(() => {
        heroMenuTitle.classList.remove('is-animated-out')
        heroMenuTitle.classList.add('is-hidden')
      }, 250)
    } else {
      heroMenuTitle.classList.remove('is-hidden')
    }
  }

  render () {
    return (
      <>
        <span id="sticky-copy" className="text__sticky">Ansatz</span>
        <div id="copy-title" className="copy__title-container">
          <h1 className="copy__headline">Analysieren, recherchieren, planen, fragen – kritisch, aber hilfreich. Zuhören, diskutieren, skizzieren, träumen… Ich suche individuelle Ansätze, um Euch zu unterstützen und gemeinsam etwas zu verändern.</h1>
        </div>
        <div className="copy__text-container">
          <p className="copy__text-container__copy">In mehr als 10 Jahren auf Agentur- und Unternehmensseite habe ich eine umfangreiche Expertise im Brand Consulting, sowie der strategischen Beratung von Marken und Unternehmen aufgebaut. Statt auf kurzfristige, laute Effekte zu setzen, liegt mein Fokus auf wirksamen, sinnvollen und vor allem nutzerorientierten Ansätzen. Strategisch zu arbeiten bedeutet für mich auch, kreativ nach Ideen und Wegen zu suchen. Nachdem ich zuletzt den Berliner Standort einer Digitalagentur geleitet habe, biete ich seit Frühjahr 2017 als Freiberuflerin eine individuelle Zusammenarbeit an, zu der ich auf Wunsch gerne weitere Kollegen aus meinem Netzwerk hinzuziehe.</p>
          <p>Ich glaube an die Kraft von sinnstiftenden Projekten und daran, dass Arbeiten Spaß machen kann. Die Lösungen, die wir gemeinsam entwickeln, sind organisch und passen zu den Menschen oder der Marke dahinter. Zum gemeinsamen Arbeitsprozess gehört auch, dass wir uns kennenlernen und vertrauen: Meine Beratung - ob punktuell oder prozessual - ist immer unabhängig.</p>
        </div>
      </>
    )
  }
}