import React, { Component } from 'react'
import './Contact.css'

export default class Contact extends Component {

  render() {
    return (
      <section className="contact">
        <header className="contact__header">
          <p className="contact__header__text">Sarah Broßeder</p>
          <p className="contact__header__text">Kontakt</p>
          <button onClick={this.props.closeContact} className="contact__close"></button>
        </header>
        <address>
          Sarah Broßeder<br />
          0160 7526002<br />
          hallo@sarah-brosseder.de
        </address>
      </section>
    )
  }
}
