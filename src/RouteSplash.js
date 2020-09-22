import React, { Component } from 'react';
import {Router, Link, navigate} from '@reach/router'
import API from './API'
import RouteLogIn from './RouteLogIn'
import RouteSignUp from './RouteSignUp'
import RouteShares from './RouteShares'
import RouteAddShare from './RouteAddShare'
import RouteUpdateShare from './RouteUpdateShare'
import RouteShare from './RouteShare'

class RouteSplashPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="app">
                <div className="heading">
                    <img src="../assets/ShareMe Logo 1.svg" width="200px"/>
                </div>

                <div className="links">
                    <Link to='/users/login'><button type="submit" className="btn btn-primary">Log in</button></Link>
                    <Link to='/users/signup'><button type="submit" className="btn btn-primary">Sign up</button></Link>
                </div>
            </div>
        );
    }
}

export default RouteSplashPage;
