import React from 'react'
import { CtaContent as content } from '../content/content'
import './Cta.css'

function Cta() {
  return (
    <>
      <span id="cta-anchor" className="text__sticky">{content.tagline}</span>
      <div className="cta__container">
        <h1>{content.headline}
          <span className="is-hidden-on-mobile not-wrappable"> hallo@sarah-brosseder.de </span>
          <a href="mailto:hallo@sarah-broßeder.de"><span className="is-hidden-on-desktop text__underlined text__underlined--fine"> hallo@sarah-broßeder.de </span></a>
          oder
          <a href="tel:+00491607526002"><span className="is-hidden-on-desktop text__underlined text__underlined--fine"> 0160 7526002</span></a>
          <span className="is-hidden-on-mobile not-wrappable"> 0160 752 6002</span>
        </h1>
      </div>
    </>
  )
}

export default Cta
