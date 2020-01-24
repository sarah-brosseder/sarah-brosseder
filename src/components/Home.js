import React from 'react'

import Bullets from './Bullets'
import Copy from './Copy'
import Cta from './Cta'
import Hero from './Hero'
import Gallery from './Gallery'

function Home() {
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
        <Gallery />
      </section>
      <section className="cta">
        <Cta />
      </section>
    </main>
  )
}

export default Home