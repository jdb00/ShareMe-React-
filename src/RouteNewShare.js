import React, { Component } from 'react'
import { Link, navigate } from '@reach/router'
import './App.css'

class RouteNewShare extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="app">
                <div className="newShares">
                    <header>
                        <div className="profimg">
                            <img src='../assets/gettyimages-472015658 2.svg' alt="" />
                        </div>
                        <div className="welcome">
                            <p>Hello <span className="name">Jim</span><br />What would you like to share today?</p>
                        </div>
                    </header>
                    <main>
                        <h2>New shares</h2>
                        <div className="logo">
                            <img src="../assets/signup-faded" alt="" />
                        </div>

                        {/* Component to go here */}

                    </main>
                    <footer>
                    <Link to='/user/posts'><i className="fas fa-home"></i></Link>
                        <Link to='/shares/add'><i className="fas fa-plus"></i></Link>
                        <Link to='/user/settings'><i className="fas fa-cog"></i></Link>
                    </footer>
                </div>
            </div>
        )
    }
}

export default RouteNewShare