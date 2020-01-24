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

  render() {
    return (
      <>
        <div id="about-anchor" className="tiles">
          <span className="text__sticky">Über mich</span>
          <span className="arrow__sticky arrow__sticky--gallery"></span>
          <div className="tile tile--first">
            <img className="tile__image" src={portrait}/>
          </div>
          <div  className="tile tile--text tile--second">
            <h3 className="tile__headline">Sarah</h3>
            <p>Strategisches und kreatives Arbeiten braucht geistige Kapazitäten. Als fast schon Digital Native habe ich gleichzeitig gerade noch ein Magister-Studium in der Tasche: Mit Musikwissenschaft, Soziologie und Psychologie habe ich unterschiedliche Ansätze und Methoden studiert aber vor allem gelernt, analytisch und interdisziplinär zu denken. Als nicht nur Kopf-Mensch interessiere ich mich genauso für Körper &amp; Seele. Für den ganzen Menschen - und für die Menschen um mich herum. Für Musik, Yoga, gesundes Essen und das Schöne Leben.</p>
            <p>
              <a className="tile__link text__underlined text__underlined--fine">Kontakt</a>
            </p>
          </div>
        </div>
        <div className="tiles">
          <span  className="text__sticky">Mein Netzwerk</span>
          <span className="arrow__sticky arrow__sticky--gallery"></span>
          <div className="tile tile--text tile--third">
            <h3 className="tile__headline">Lieblingskollegen</h3>
            <p>Ich arbeite am liebsten im Team und habe ein Netzwerk aus richtig guten Kollegen, das ich gerne mit in unser Projekt hole. Dazu zählen neben Strategie, Kreativdirektion, Art Direktion und Redaktion auch technische Services wie Web-Development, UI/UX oder Contentproduktion.</p>
          </div>
          <div className="tile tile--last--grid">
            <img className="tile__image" src={landscape}/>
          </div>
        </div>
        <span className="animated-line"></span>
      </>
    )
  }
}
