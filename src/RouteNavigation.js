import React, { Component } from 'react';
import {Link} from '@reach/router'


class RouteNavigation extends Component {

    render() {
        return (
            <div className="app">
                <div className="header">
                    <Link to="../shares"><i className="fas fa-times"></i></Link>
                    <img src="../assets/ShareMe Logo 1.svg" width="200px" height="80px" className="logo" alt="ShareMe Logo"/>
                </div>

                <div className="links">
                    <Link to='../shares'><button className="btn btn-nav">Feed</button></Link>
                    <Link to='/shares/add'><button className="btn btn-nav">Add Share</button></Link>
                    <Link to='../settings'><button className="btn btn-nav">User Settings</button></Link>
                    <Link to='../splash'><button className="btn btn-nav">Logout</button></Link>
                </div>
            </div>
        );
    }
}

export default RouteNavigation;