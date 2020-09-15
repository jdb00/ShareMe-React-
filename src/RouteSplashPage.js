import React, { Component } from 'react';
import {Link } from '@reach/router'
import './App.css';

class RouteSplashPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="app">
                <div className="splashPage">
                    <header>

                    </header>
                    <main>
                        <div className="logo">
                            <img src='../assets/ShareMe Logo 1.svg' alt="" />
                        </div>
                        <div className="signin-signup">
                            <button type="submit" className="btn btn-primary"><Link to='/users/authenticate'>Sign in</Link></button>
                            <button type="submit" className="btn btn-primary"><Link to='/users/create'>Sign up</Link></button>
                        </div>
                    </main>
                    <footer>

                    </footer>
                </div>
            </div>
        );
    }
}

export default RouteSplashPage;
