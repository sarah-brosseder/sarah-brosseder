import React, { Component } from 'react'

import Bullets from './Bullets'
import Copy from './Copy'
import Cta from './Cta'
import Hero from './Hero'
import Gallery from './Gallery'

export default class Home extends Component {

  render() {
    return (
      <main className="main">
        <section className="hero">
          <Hero />
        </section>
        <section className="copy">
          <Copy />
        </section>
        <section className="bullets">
          <Bullets />
        </section>
        <section className="gallery">
          <Gallery openContact={this.props.openContact} />
        </section>
        <section className="cta">
          <Cta />
        </section>
      </main>
    )
  }
}