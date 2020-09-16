import React, { Component } from 'react'
import Footer from './footer'
import Header from './header'
import NewCard from './NewCard'
import API from './API'
import './App.css'

class RouteUserPosts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shares: [],
        }
    }

    loadShares = () => {
        API.getShares().then(res => {
            this.setState({ shares: res.data })
        })
    }

    componentDidMount() {
        this.loadShares()
    }

    render() {
        var { currentUser } = this.props
        return (
            <div className="app">
                <div className="usersPosts">
                    <header>
                        <div className="logo">
                            <img src="../assets/ShareMe Logo 1.svg" alt="" />
                        </div>
                        <div className="profimg">
                            <img src="../assets/gettyimages-472015658 2.svg" alt="" />
                        </div>
                    </header>
                    {
                        currentUser ? (
                            <main>
                                {/* <div className="profimg">
                                    <img src="../assets/gettyimages-472015658 2.svg" alt="" />
                                </div> */}
                                <h1>Hello <br /><span>{currentUser.name}</span></h1>
                            </main>
                        ) : null
                    }
                    <div className="cards">
                        {
                            this.state.shares.map((share) => {

                                var shareProps = {
                                    ...share,
                                    key: share.id,
                                    loadShares: this.loadShares,
                                    currentUser: currentUser,

                                }
                                return (<NewCard {...shareProps} />)
                            })
                        }
                    </div>
                    <footer>
                        <Footer />
                    </footer>
                </div>
            </div>
        )
    }
}

export default RouteUserPosts