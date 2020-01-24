import React, { Component } from 'react'
import './Gallery.css'
import './Animations.css'
import { AboutMeContent as aboutContent } from '../content/content'
import { NetworkContent as networkContent } from '../content/content'
import landscape from '../images/landscape.jpg'
import portrait from '../images/portrait.jpg'

export default class Gallery extends Component {

  render() {
    return (
      <>
        <div id="about-anchor" className="tiles">
          <span className="text__sticky">{aboutContent.tagline}</span>
          <span className="arrow__sticky arrow__sticky--gallery"></span>
          <div className="tile tile--first">
            <img className="tile__image" src={portrait}/>
          </div>
          <div  className="tile tile--text tile--second">
            <h3 className="tile__headline">{aboutContent.headline}</h3>
            <p>{aboutContent.copy}</p>
            <p>
              <a onClick={this.props.openContact} className="tile__link text__underlined text__underlined--fine">{aboutContent.label}</a>
            </p>
          </div>
        </div>
        <div className="tiles">
          <span  className="text__sticky">{networkContent.tagline}</span>
          <span className="arrow__sticky arrow__sticky--gallery"></span>
          <div className="tile tile--text tile--third">
            <h3 className="tile__headline">{networkContent.headline}</h3>
            <p>{networkContent.copy}</p>
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
