import React, { Component } from 'react'
import { CopyContent as content } from '../content/content'
import './Animations.css'
import './Copy.css'

export default class Copy extends Component {

  render () {
    return (
      <>
        <span id="copy-anchor" className="text__sticky">{content.tagline}</span>
        <div className="copy__title-container">
          <h1 className="copy__headline">{content.headline}</h1>
        </div>
        <span className="arrow__sticky"></span>
        <div className="copy__text-container">
          { content.paragraphs.map(block => (
            <p key={block} className="copy__text-container__copy">{block}</p>
          ))}
        </div>
        <span className="animated-line"></span>
      </>
    )
  }
}