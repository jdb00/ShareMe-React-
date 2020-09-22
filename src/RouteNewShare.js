import React, { Component } from 'react'
import Footer from './footer'
import API from './API'

class RouteNewShare extends Component {

    loadShares = () => {
        API.getShares().then(res => {
            this.setState({ shares: res.data })
        })
    }

    componentDidMount = () => {
        this.loadShares()
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
                        <div className="logo">
                            <h2>New shares</h2>
                            <img src="../assets/signup-faded.svg" alt="" />
                        </div>
                        <div className="shares">

                        </div>
                    </main>
                    <footer>
                        <Footer />
                    </footer>
                </div>
            </div>
        )
    }
}

export default RouteNewShare