import React, { Component } from 'react';
import { Router, Link, navigate} from '@reach/router'
import './App.css';

import RouteSplashPage from './RouteSplashPage'
import RouteLogIn from './RouteLogIn'
import RouteSignUp from './RouteSignUp'
import RouteAddShare from './RouteAddShare'
import RouteNewShare from './RouteNewShare'
import RouteUpdateShare from './RouteUpdateShare'
import RouteUserPosts from './RouteUserPosts'
import RouteSettings from './RouteSettings'
import RouteShareModal from './RouteShareModal';


class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="app">
                <Router>
                    <RouteSplashPage path="splash"/>
                    <RouteLogIn  path="users/authenticate"/>
                    <RouteSignUp path="users/create"/>
                    <RouteSettings path="user/settings"/>
                    <RouteUserPosts path="user/posts"/>
                    <RouteAddShare path="shares/add"/>
                    <RouteNewShare path="shares"/>
                    <RouteUpdateShare path="shares/update"/>
                    <RouteShareModal path="shares/:id"/>
                </Router>
            </div>
        )
    }
}

export default App;
