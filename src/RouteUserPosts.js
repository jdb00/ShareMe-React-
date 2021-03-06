import React, { Component } from 'react'
import Footer from './footer'
import Header from './header'
import './App.css'

class RouteUserPosts extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="app">
                <div className="usersPosts">
                    <header>
                        <Header />
                    </header>
                    <main>
                        <div className="profimg">
                            <img src="../assets/gettyimages-472015658 2.svg" alt="" />
                        </div>
                        <h1 className="user-name">Jim Carrey</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corporis laudantium itaque reiciendis vel molestias, harum eaque explicabo maxime magni?</p>

                        {/* Component to go here */}

                    </main>
                    <footer>
                        <Footer />
                    </footer>
                </div>
            </div>
        )
    }
}

export default RouteUserPosts