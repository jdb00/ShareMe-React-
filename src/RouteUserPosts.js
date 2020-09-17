import React, { Component } from 'react'
import Footer from './footer'
import NewCard from './NewCard'
import { Link, navigate } from '@reach/router';
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

    handleLogoutClick = (e) => {
        e.preventDefault()
        localStorage.removeItem('userId')
        // this.setState({ currentUser: null })
        // navigate('/splash')
        this.props.setCurrentUser(null)
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
                        <div className="logedInUser">
                            {
                                currentUser ? <h1>Hello <br /><span>{currentUser.name}</span></h1> : <p>You have to<br/>log in<br/>to add and edit posts</p>
                            }
                        </div>
                        <div className="profimg">
                            <img src="../assets/avatar.jpg" alt="" />
                            <Link to='/users/authenticate'>
                                {
                                    (currentUser ? <p onClick={this.handleLogoutClick}>Log out</p> : <p>Log in</p>)
                                }
                            </Link>
                        </div>
                    </header>
                    <main>
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