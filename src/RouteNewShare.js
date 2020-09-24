import React, { Component } from 'react'
import {navigate } from '@reach/router'
import Footer from './Footer'
import './App.css'
import RouteNewCard from './ShareCard'
import API from './API'
import { Spring } from 'react-spring/renderprops';

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
        var {currentUser} = this.props
        return (
            <Spring
                from={{opacity: 0, marginTop: -500}}
                to={{opacity: 1, marginTop: 0}}
            >
                {props => (
                    <div className="app" style={props}>
                        <div className="new-shares">
                            <header>
                                <div className="header-container">
                                    <div className="prof-img">
                                        <img src={API.serverURL+currentUser.profile_picture} alt="" onClick={this.handleProfileClick}/>
                                    </div>
                                    <div className="welcome">
                                        <p>Hello <span className="name">{this.props.currentUser.name}</span><br/>What would you like to share today?</p>
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
        
                                        return null
                                    })}
                                </div>
                            </main>
                            <footer>
                                <Footer/>
                            </footer>
                        </div>
                    </div>
                )}


            </Spring>
            
        )
    }
}

export default RouteNewShare