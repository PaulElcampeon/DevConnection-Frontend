import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom'

import './App.css';
import '../src/css/Login.css';
import '../src/css/Register.css';

import Login from './components/Login.js';
import Register from './components/Register.js';
import Skill from './components/Skill.js';
// import ProjectInProfile from './components/ProjectInProfile.js';
// import Project from './components/Project.js';
import Profile from './components/Profile.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authenticated: false
    }
  }

  componentDidMount() {
    let token = localStorage.getItem("devConTok")
    if (token) {
      this.setState({
        authenticated: true
      })
    }
  }

  setAuthenticated = () => {
    this.setState({
      authenticated: true
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path='/' render={() => {
            return (
              this.state.authenticated ? (
                <Redirect to="/profile" />
              ) : (
                  <Login setAuthenticated={this.setAuthenticated} />
                )
            )
          }} />

          <Route exact path='/profile' render={() => {
            return (
              this.state.authenticated ? (
                <Profile />
              ) : (
                  <Redirect to="/" />
                )
            )
          }} />

          <Route exact path='/profile' component={Profile} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/project/create' />
          <Route exact path='/projects' />
          <Route exact path='/profiles' />
          <Route exact path='/search' />

          <Route render={() => {
            return <h2>Error! Try again.</h2>
          }} />

        </Router>
      </div>
    );
  }
}

export default App;