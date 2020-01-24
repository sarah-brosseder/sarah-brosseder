import React, { Component } from 'react'
import './Menu.css'

export default class Menu extends Component {

  render() {
    return (
      <nav className="menu">
        <div className="menu__container menu__container--left">
          <p className="menu__text menu__text--first">
            <a href="/">Sarah Broßeder</a>
          </p>
        </div>
        <div className="menu__container menu__container--right">
          <p className="menu__text">
            <button onClick={this.props.openContact} className="menu__text__link text__underlined text__underlined--fine">Kontakt</button>
          </p>
        </div>
      </nav>
    )
  }
}
