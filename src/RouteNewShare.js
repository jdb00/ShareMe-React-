import React, { Component } from 'react';
import './App.css';

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
                        <i className="fas fa-home"></i>
                        <i className="fas fa-plus"></i>
                        <i className="fas fa-cog"></i>
                    </footer>
                </div>
            </div>
        )
    }
}

export default RouteNewShare