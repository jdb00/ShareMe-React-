import React, { Component } from 'react';
import {Link} from '@reach/router'

class RouteSplashPage extends Component {

    render() {
        return (
            <div className="app">
                <div className="heading">
                    <img src="../assets/ShareMe Logo 1.svg" width="200px" alt="ShareMe Logo"/>
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
