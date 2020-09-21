import React, { Component } from 'react';
import { Router } from '@reach/router'
import API from './API'
import RouteSplashPage from './RouteSplashPage'
import RouteLogIn from './RouteLogIn'
import RouteSignUp from './RouteSignUp'
import RouteAddShare from './RouteAddShare'
import RouteNewShare from './RouteNewShare'
import RouteUpdateShare from './RouteUpdateShare'
import RouteUserPosts from './RouteUserPosts'
import RouteSettings from './RouteSettings'

class App extends Component {
    constructor(props) {
        super()
        this.state = {
            shares: [],
            currentUser: null,
            user: {}
        }
    }

    componentDidMount() {
        API.getShares().then(res => this.setState({ shares: res.data }))
        this.loadUser()

    }
    loadUser = () =>{
        //local storage
        var userId = localStorage.getItem('userId')
        if (userId) {
            API.getSingleUser(userId).then(res => this.setState({ currentUser: res.data }))
        }
    }

    setCurrentUser = (user) => {
        this.setState({ currentUser: user })
    }

    render() {
        var { currentUser } = this.state
        return (
            <div className="app">
                <Router>
                    <RouteSplashPage path="splash" />
                    <RouteLogIn setCurrentUser={this.setCurrentUser} path="/users/authenticate" />
                    <RouteSignUp currentUser={currentUser} setCurrentUser={this.setCurrentUser} path="users/create" />
                    <RouteSettings loadUser={this.loadUser} path="/users/:id/settings" />
                    <RouteUserPosts currentUser={currentUser} setCurrentUser={this.setCurrentUser} path="user/posts" />
                    <RouteAddShare currentUser={currentUser} path="shares/add" />
                    <RouteNewShare path="shares" />
                    <RouteUpdateShare path="shares/:id/update" />
                </Router>
            </div>
        )
    }
}

export default App;
