import React, { Component } from 'react'
import './App.css';

class RouteLogIn extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="app">
                <div className="signIn">
                    <header>
                        <div className="logo">
                            <img src='../ShareMe Logo 1.svg' alt="" />
                        </div>
                    </header>
                    <main>
                        <div className="signIn">
                            <h1>Sign in</h1>
                            <img src='../assets/signup-faded.svg' alt="" />
                        </div>
                        <form>

                            <div className="form-group">
                                <label for="email"></label>
                                <input type="email" className="form-control" id="email" aria-describedby="email"
                                    placeholder="Email" />
                            </div>

                            <div className="form-group">
                                <label for="password"></label>
                                <input type="text" className="form-control" id="password" aria-describedby="password"
                                    placeholder="Password" />
                            </div>

                        </form>

                        <a href="New Shares.html"><button type="submit" className="btn btn-primary">Sign In</button></a>

                    </main>
                    <footer>

                    </footer>
                </div>
            </div>
        )
    }
}

export default RouteLogIn;
