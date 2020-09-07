import React, { Component } from 'react';
import { Router, Link, navigate} from '@reach/router'
import './App.css';

import RouteSplashPage from './RouteSplashPage'
import RouteLogIn from './RouteLogIn'
import RouteSignUp from './RouteSignUp'
import RouteUpdateShare from './RouteUpdateShare'


class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="app">
                <Router>
                    <RouteSplashPage path="splash" />
                    <RouteLogIn  path="users/authenticate"/>
                    <RouteSignUp path="users/create"/>
                    <RouteUpdateShare path="bla"/>
                </Router>
            </div>
        )
    }
}

export default App;
