import React, { Component } from 'react'
import { Link, navigate } from '@reach/router'
import Footer from './footer'
import './App.css'
import RouteNewCard from './RouteNewCard'
import API from './API'
import ShareCard from './RouteNewCard'

class RouteNewShare extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shares: [
                
            ]
        }
    }

    checkUser = () =>{
        console.log('abc')
    }

    loadShares = () => {
        API.getShares().then(res => {
            this.setState({shares: res.data})
        })
    }

    componentDidMount = () => {
        this.loadShares()
    }

    handleProfileClick = () => {
        navigate ('/user/'+this.props.currentUser.id)
    }

    render() {
        return (
            <div className="app">
                <div className="newShares">
                    <header>
                        <div className="header-container">
                            <div className="profimg">
                                <img src='../assets/gettyimages-472015658 2.svg' alt="" onClick={this.handleProfileClick}/>
                            </div>
                            <div className="welcome">
                                <p>Hello <span className="name">Jim.</span><br/>What would you like to share today?</p>
                            </div>
                        </div>
                    </header>

                    <main>
                        <div className="logo">
                            <h2>New shares</h2>
                            <img src="../assets/signup-faded" alt="" />
                        </div>
                        <div className="shares">
                            {this.state.shares.map((share) => {
                                var shareProps = {
                                    ...share,
                                    key: share.id,
                                    loadShares: this.loadShares,
                                    currentUser: this.props.currentUser
                                    };
                                    if(shareProps.user != null){
                                        return (<RouteNewCard{...shareProps}/>)
                                    }
                                })
                            }
                        </div>
                    </main>
                    <footer>
                        <Footer/>
                    </footer>
                </div>
            </div>
        )
    }
}

export default RouteNewShare