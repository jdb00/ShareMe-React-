import React, { Component } from 'react';
import { Router, Link, navigate} from '@reach/router'
import './App.css';
import API from './API'

import RouteSplashPage from './RouteSplashPage'
import RouteLogIn from './RouteLogIn'
import RouteSignUp from './RouteSignUp'
import RouteAddShare from './RouteAddShare'
import RouteNewShare from './RouteNewShare'
import RouteUpdateShare from './RouteUpdateShare'
import RouteUserPosts from './RouteUserPosts'
import RouteSettings from './RouteSettings'
import RouteShareModal from './RouteShareModal';
import RouteNewCard from './RouteNewCard'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: {
                id:2,
                name: 'JimCarreyGodX',
                password: 'password101',
                email: 'jayfrost@gmail.com',
                profile_picture: 'photo.jpg',
                about_me: 'The motto γνῶθι σ(ε)αυτόν (“know thyself”) was one of the maxims inscribed on the pediment of the temple of Apollo at Delphi, along with μηδὲν ἄγαν (“nothing in excess”), inviting mankind to exercise moderation in life.'
            }
        }
    }


    render() {
        return (
            <div className="app">
                <Router>
                    <RouteSplashPage path="splash"/>
                    <RouteLogIn  path="users/authenticate"/>
                    <RouteSignUp path="users/create"/>
                    <RouteSettings path="user/settings"/>
                    <RouteUserPosts path="user/shares" user = {this.state.currentUser}/>
                    <RouteAddShare path="shares/add" currentUser = {this.state.currentUser}/>
                    <RouteNewShare path="shares"/>
                    <RouteUpdateShare path="shares/update/:id"/>
                    <RouteShareModal path="shares/:id" user = {this.state.currentUser}/>
                </Router>
            </div>
        )
    }
}

export default App;
