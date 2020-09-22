import React, { Component } from 'react';
import {Router, Link, navigate} from '@reach/router'
import API from './API'
import RouteSplashPage from './RouteSplash'
import RouteLogIn from './RouteLogIn'
import RouteSignUp from './RouteSignUp'
import RouteAddShare from './RouteAddShare'
import RouteUpdateShare from './RouteUpdateShare'
import RouteShares from './RouteShares'
import RouteShare from './RouteShare'
import RouteSettings from './RouteSettings'

class RouteNavigation extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="app">
                <div class="header">
                    <Link to="../shares"><i class="fas fa-times"></i></Link>
                    <img src="../assets/ShareMe Logo 1.svg" width="200px" height="80px" className="logo"/>
                </div>

                <div className="links">
                    <Link to='../shares'><button className="btn btn-nav">Feed</button></Link>
                    <Link to='/shares/add'><button className="btn btn-nav">Add Share</button></Link>
                    <button className="btn btn-nav">About Us</button>
                    <Link to='../settings'><button className="btn btn-nav">User Settings</button></Link>
                    <Link to='../splash'><button className="btn btn-nav">Logout</button></Link>
                </div>
            </div>
        );
    }
}

export default RouteNavigation;