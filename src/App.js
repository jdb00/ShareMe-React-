import React, { Component } from 'react';
import { Router, Link, navigate} from '@reach/router'
import './App.css';

import RouteSplashPage from './RouteSplashPage'
import RouteLogIn from './RouteLogIn'
import RouteSignUp from './RouteSignUp'
import RouteUpdateShare from './RouteUpdateShare'
import RouteShareModal from './RouteShareModal'


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
                    <RouteShareModal path="feed/share/"/>
                </Router>
            </div>
        )
    }
}

export default App;
