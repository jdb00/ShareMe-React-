import React, { Component } from 'react'
import './App.css'

class RouteSignUp extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="app">
                <div className="signUp">
                    <header>
                        <div className="logo">
                            <img src='../assets/ShareMe Logo 1.svg' alt="" />
                        </div>
                    </header>
                    <main>
                        <div className="signUp">
                            <h1>Sign up</h1>
                            <img src="../assets/signup-faded.svg" alt="" />
                        </div>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name"></label>
                                <input type="text" className="form-control" id="name" aria-describedby="name"
                                    placeholder="Name" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email"></label>
                                <input type="email" className="form-control" id="email" aria-describedby="email"
                                    placeholder="Email" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password"></label>
                                <input type="email" className="form-control" id="password" aria-describedby="password"
                                    placeholder="Password" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="confirm-password"></label>
                                <input type="email" className="form-control" id="confirm-password" aria-describedby="confirm-password"
                                    placeholder="Confirm password" />
                            </div>

                        </form>

                        <a href="Sign In.html"><button type="submit" className="btn btn-primary">Sign up</button></a>

                    </main>
                    <footer>

                    </footer>
                </div>
            </div>
        )
    }
}

export default RouteSignUp;
