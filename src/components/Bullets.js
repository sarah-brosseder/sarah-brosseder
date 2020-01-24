import React, { Component } from 'react'
import { BulletsContent as content } from '../content/content'
import './Animations.css'
import './Bullets.css'

export default class Bullets extends Component {

  render() {
    return (
      <>
        <div id="bullets-anchor" className="bullets__container">
          <span className="text__sticky">{content.tagline}</span>
          <div className="bullets__title-container">
            <h1 className="bullets__headline">{content.headline}</h1>
          </div>
          <span className="arrow__sticky"></span>
          <div className="list__container list__container--first">
            <h3 className="list__headline">{content.first.headline}</h3>
            <ul>
              { content.first.bulletpoints.map(element => (
                <li key={element} className="list__element">{element}</li>
              ))}
            </ul>
          </div>
          <span className="list__container__arrow"></span>
          <div className="list__container list__container--second">
            <h3 className="list__headline">{content.second.headline}</h3>
            <ul>
              { content.second.bulletpoints.map(element => (
                <li key={element} className="list__element">{element}</li>
              ))}
            </ul>
          </div>
        </div>
        <span className="animated-line"></span>
      </>
    )
  }
}
