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
                        <Header />
                    <main>
                        <div className="profimg">
                            <img src="../assets/gettyimages-472015658 2.svg" alt="" />
                        </div>
                        <h1>Welcome <br />{currentUser}</h1>
                    </main>
                    <div className="cards">
                    {
                        this.state.shares.map((share) => {

                            var shareProps = {
                                ...share,
                                key: share.id,
                                loadShares: this.loadShares

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