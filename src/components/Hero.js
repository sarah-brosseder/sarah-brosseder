import React, { Component } from 'react'
import { HeroContent as content } from '../content/content'
import './Hero.css'

export default class Hero extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      tooltipAboutVisible: false,
    }
    this.hideAboutTooltip = this.hideAboutTooltip.bind(this)
    this.showAboutTooltip = this.showAboutTooltip.bind(this)
  }

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

  hideAboutTooltip() {
    this.setState({
      tooltipAboutVisible: false,
    })
  }

  showAboutTooltip() {
    console.log(this.state)
    this.setState({
      tooltipAboutVisible: true,
    })
  }

  render() {
    return (
      <>
        <span className="text__sticky">{content.tagline}</span>
        <div className="hero__container">
          <h1 className="hero__container__headline">
            <span>Hallo, ich bin </span>
            <span
              onMouseEnter={this.showAboutTooltip}
              onMouseLeave={this.hideAboutTooltip}
              onClick={this.scrollToAbout}
              className="text__underlined"
            >
              Sarah
              { this.state.tooltipAboutVisible &&
                <span className="hero__tooltip">Über mich</span>
              }
            </span>
            <span>.<br/>Ich biete </span>
            <span className="text__underlined">kreative Strategie</span>
            <span> und </span>
            <span className="text__underlined">Beratung</span>
            <span> für </span>
            <span className="text__underlined">Menschen</span>
            <span> und </span>
            <span className="text__underlined">Marken</span>
            <span> an. Gemeinsam arbeiten wir an </span>
            <span className="text__underlined">Positionierungsfragen</span>
            <span>, </span>
            <span className="text__underlined">Visionen</span>
            <span> und </span>
            <span className="text__underlined">Zielen</span>
            <span> und daran, wie der </span>
            <span className="text__underlined">Weg dorthin</span>
            <span> aussehen kann.</span>
          </h1>
        </div>
        <span className="animated-line"></span>
      </>
    )
  }
}
