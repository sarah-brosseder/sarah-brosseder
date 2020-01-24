import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default class Footer extends Component {

  handleClick() {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' })
  }

  render() {
    return (
      <footer className="footer">
        <ul className="footer__list">
          <li className="footer__list__element">
            <Link to="/impressum" className="footer__text text__underlined text__underlined--fine text__underlined--orange">Impressum</Link>
          </li>
          <li><span onClick={() => this.handleClick()} className="footer__text text__underlined text__underlined--fine text__underlined--orange footer__text--arrow">Nach oben</span></li>
        </ul>
      </footer>
    )
  }
}
