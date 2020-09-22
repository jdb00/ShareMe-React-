import React, { Component } from 'react';
import {Router, Link, navigate} from '@reach/router'
import API from './API'
import RouteSplashPage from './RouteSplash'
import RouteLogIn from './RouteLogIn'
import RouteSignUp from './RouteSignUp'
import RouteShares from './RouteShares'
import RouteAddShare from './RouteAddShare'
import RouteUpdateShare from './RouteUpdateShare'
import RouteNavigation from './RouteNavigation'
import RouteShare from './RouteShare'
import RouteSettings from './RouteSettings'
import './App.css';

var urlPrefix = 'http://localhost:4020/api'

class App extends Component {
    constructor(props) {
        super()

        this.state = {
        currentUser: null
      }
    }

    setCurrentUser = (user) => {
        this.setState({currentUser: user})
    }

    render() {
        var {currentUser} = this.state
        return (
            <div className="app">
                <Router>
                    <RouteSplashPage path="splash"/>
                    <RouteLogIn setCurrentUser={this.setCurrentUser} path="users/login"/>
                    <RouteSignUp path="users/signup"/>
                    <RouteShares currentUser={currentUser} path="shares"/>
                    <RouteAddShare path="shares/add"/>
                    <RouteUpdateShare path="shares/:id/update"/>
                    <RouteNavigation path="nav"/>
                    <RouteSettings currentUser={currentUser} path="settings"/>
                </Router>
            </div>
        )
    }
}

export default App;
