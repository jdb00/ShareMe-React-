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
import NewCard from './NewCard';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shares: [],
            currentUser: null
        }
    }
    
      componentDidMount(){
        API.getShares().then(res => this.setState({shares:res.data}))
        //local storage
        // var userId = localStorage.getItem('userId')
        // if (userId) {
        //     API.getSingleUser(userId).then(res => this.setState({ currentUser: res.data }))
        // }
      }

      setCurrentUser = (user) => {
        this.setState({currentUser:user})
      }

    render() {
        var { currentUser} = this.state
        return (
            <div className="app">
                <Router>
                    <RouteSplashPage path="splash" />
                    <RouteLogIn setCurrentUser={this.setCurrentUser} path="/users/authenticate" />
                    <RouteSignUp path="users/create" />
                    <RouteSettings path="user/settings" />
                    <RouteUserPosts currentUser={currentUser} path="user/posts" />
                    <RouteAddShare currentUser={currentUser}  path="shares/add" />
                    <RouteNewShare path="shares" />
                    <RouteUpdateShare path="shares/update" />
                    {currentUser ? <NewCard currentUser={currentUser} path="new/card" /> : null}

                </Router>
            </div>
        )
    }
}

export default App;
