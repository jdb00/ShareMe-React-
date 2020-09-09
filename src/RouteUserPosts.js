import React, { Component } from 'react'
import { Link, navigate } from '@reach/router'
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
                        <i className="fas fa-chevron-left"></i>
                        <div className="logo">
                            <img src="../assets/ShareMe Logo 1.svg" alt="" />
                        </div>
                        <div className="profimg">
                            <img src="../assets/gettyimages-472015658 2.svg" alt="" />
                        </div>
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
                        <Link to='/user/posts'><i className="fas fa-home"></i></Link>
                        <Link to='/shares/add'><i className="fas fa-plus"></i></Link>
                        <Link to='/user/settings'><i className="fas fa-cog"></i></Link>
                    </footer>
                </div>
            </div>
        )
    }
}

export default RouteUserPosts