import React, { Component } from 'react';
import './App.css';

class RouteSplashPage extends Component {
    constructor(props) {
        super(props)
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
                            <button type="submit" className="btn btn-primary">Sign in</button>
                            <button type="submit" className="btn btn-primary">Sign up</button>
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
