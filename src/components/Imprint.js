import React, { Component } from 'react'
import { ImprintContent as content } from '../content/content'
import './Imprint.css'

export default class Imprint extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <section className="imprint">
        <div id="imprint-title" className="imprint__container">
          <h1 className="imprint__headline">Impressum</h1>
          <h2>Kontakt</h2>
          <p><a href="mailto:hallo@sarah-broßeder.de"><span className="is-hidden-on-desktop text__underlined text__underlined--fine"> hallo@sarah-broßeder.de</span></a>
            <span className="is-hidden-on-mobile"> hallo@sarah-broßeder.de</span>
            <br />
            Telefon:
            <a href="tel:+00491607526002"><span className="is-hidden-on-desktop text__underlined text__underlined--fine"> 0160 7526002</span></a>
            <span className="is-hidden-on-mobile"> +49 160 7526002</span>
          </p>
          <h2>Adresse</h2>
          <p>
            Sarah Broßeder
            <br />Weserstraße 83
            <br />12059 Berlin
            <br />Deutschland
          </p>
          <h2>Haftungs- und Urheberrechtshinweise</h2>
          <p>Links auf fremde Webseiten: Inhalte fremder Websites, auf die direkt oder indirekt verlinkt wird, liegen außerhalb meines Verantwortungsbereiches und mache ich mir nicht zu Eigen. Für Inhalte und insbesondere für Schäden, die aus der Nutzung der in den verlinkten Websites aufrufbaren Informationen entstehen, haften allein der Anbieter der verlinkten Websites.</p>
          <p>Urheberrechte und Markenrechte: Alle auf dieser Website dargestellten Inhalte, wie Texte, Fotos, Grafiken, Marken und Warenzeichen sind durch die jeweiligen Schutzrechte (Urheberrechte, Markenrechte) geschützt. Die Verwendung, Vervielfältigung etc. unterliegen meinen Rechten oder den Rechten der jeweiligen Urheber bzw. Rechteverwalter.</p>
          <h2>Umsatzsteuer Identifikationsnummer (USt-ID):</h2>
          <p>DE311286048</p>
        </div>
      </section>
    )
  }
}
