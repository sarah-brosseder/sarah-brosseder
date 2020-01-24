import React, { Component } from 'react'
import './Gallery.css'
import './Animations.css'
import landscape from '../images/landscape.jpg'
import portrait from '../images/portrait.jpg'

export default class Gallery extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    const bulletsMenuTitle = document.querySelector('#sticky-bullets')
    const aboutMenuTitle = document.querySelector('#sticky-about')
    const networkMenuTitle = document.querySelector('#sticky-network')
    const aboutTitle = document.querySelector('#about-title')
    const networkTitle = document.querySelector('#network-title')
    const rectAbout = aboutTitle.getBoundingClientRect()
    const rectNetwork = networkTitle.getBoundingClientRect()
    if (rectAbout.y <= 142 && rectNetwork.y > 217) {
      bulletsMenuTitle.classList.add('is-animated-out')
      window.setTimeout(() => {
        bulletsMenuTitle.classList.remove('is-animated-out')
        bulletsMenuTitle.classList.add('is-hidden')
      }, 250)
    } else if (rectNetwork.y <= 217) {
      aboutMenuTitle.classList.add('is-animated-out')
      window.setTimeout(() => {
        aboutMenuTitle.classList.remove('is-animated-out')
        aboutMenuTitle.classList.add('is-hidden')
      }, 250)
    } else {
      aboutMenuTitle.classList.remove('is-hidden')
      bulletsMenuTitle.classList.remove('is-hidden')
    }
  }

  render() {
    return (
      <div className="tiles">
        <span id="sticky-about" className="text__sticky">Über mich</span>
        <div className="tile tile--second">
          <img className="tile__image" src={portrait}/>
        </div>
        <div id="about-title" className="tile tile--text tile--first">
          <h3 className="tile__headline">Sarah</h3>
          <p>Strategisches und kreatives Arbeiten braucht geistige Kapazitäten. Als fast schon Digital Native habe ich gleichzeitig gerade noch ein Magister-Studium in der Tasche: Mit Musikwissenschaft, Soziologie und Psychologie habe ich unterschiedliche Ansätze und Methoden studiert aber vor allem gelernt, analytisch und interdisziplinär zu denken. Als nicht nur Kopf-Mensch interessiere ich mich genauso für Körper &amp; Seele. Für den ganzen Menschen - und für die Menschen um mich herum. Für Musik, Yoga, gesundes Essen und das Schöne Leben.</p>
          <p>
            <a className="tile__link text__underlined text__underlined--fine">Kontakt</a>
          </p>
        </div>
        <span id="sticky-network" className="text__sticky">Mein Netzwerk</span>
        <div className="tile tile--third--grid">
          <img className="tile__image" src={landscape}/>
        </div>
        <div className="tile tile--text tile--last">
          <h3 className="tile__headline">Lieblingskollegen</h3>
          <p id="network-title">Ich arbeite am liebsten im Team und habe ein Netzwerk aus richtig guten Kollegen, das ich gerne mit in unser Projekt hole. Dazu zählen neben Strategie, Kreativdirektion, Art Direktion und Redaktion auch technische Services wie Web-Development, UI/UX oder Contentproduktion.</p>
        </div>
      </div>
    )
  }
}
