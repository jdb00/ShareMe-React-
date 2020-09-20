import React, { Component } from 'react'
import Footer from './footer'
import { Link } from '@reach/router'
import { navigate } from '@reach/router';
import './App.css'

class RouteSplashPage extends Component {

    handleBackClick = () => {
        navigate(-1)
    }

    render() {
        return (
            <div className="app">
                <div className="splashPage">
                    <header>
                        <i className="fas fa-chevron-left" onClick={this.handleBackClick}></i>
                    </header>
                    <main>
                        <div className="logo">
                            <img src='../assets/ShareMe Logo 1.svg' alt="" />
                        </div>
                        <div className="signin-signup">
                            <button type="submit" className="btn btn-primary"><Link to='/users/authenticate'>Log in</Link></button>
                            <button type="submit" className="btn btn-primary"><Link to='/users/create'>Sign up</Link></button>
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default RouteSplashPage
