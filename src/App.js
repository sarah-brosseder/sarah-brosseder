import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Footer from './components/Footer'
import Menu from './components/Menu'
import Imprint from './components/Imprint'
import Home from './components/Home'
import Contact from './components/Contact'

import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contactModalOpen: false,
    }
    this.handleOpenContact = this.handleOpenContact.bind(this)
    this.handleCloseContact = this.handleCloseContact.bind(this)
  }

  handleCloseContact() {
    this.setState({ contactModalOpen: false })
  }

  handleOpenContact() {
    this.setState({ contactModalOpen: true })
  }

  render() {
    return (
      <Router>
        <header className="header">
          <Menu openContact={this.handleOpenContact} />
        </header>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'}>
            <Home />
          </Route>
          <Route path={process.env.PUBLIC_URL + '/impressum'}>
            <Imprint />
          </Route>
        </Switch>
        <aside>
          { this.state.contactModalOpen &&
            <Contact closeContact={this.handleCloseContact} />
          }
        </aside>
        <footer>
          <Footer openContact={this.handleOpenContact} />
        </footer>
      </Router>
    )
  }
}
