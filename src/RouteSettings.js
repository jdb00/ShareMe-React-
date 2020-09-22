import React, { Component } from 'react';
import {Router, Link, navigate} from '@reach/router'
import API from './API'
import RouteSplashPage from './RouteSplash'
import RouteLogIn from './RouteLogIn'
import RouteSignUp from './RouteSignUp'
import RouteAddShare from './RouteAddShare'
import RouteUpdateShare from './RouteUpdateShare'
import RouteShares from './RouteShares'
import RouteShare from './RouteShare'
import RouteNavigation from './RouteNavigation'

class RouteSettings extends Component {
    constructor(props) {
        super(props)
    }

    handleDeleteUser = (e) => {
        e.preventDefault()
        var {currentUser} = this.props
        API.deleteUser(currentUser.id).then(res=>{
            navigate('/splash')
        })
    }

    render() {
        var {currentUser} = this.props 
        return (
            <div className="app">
                <div class="header">
                    <Link to="../shares"><i class="fas fa-times"></i></Link>
                    {currentUser ? <label className="welcome">Welcome, {currentUser.name}</label> : null}
                    <img src="../assets/ShareMe Logo 1.svg" width="200px" height="80px" className="logo"/>
                </div>

                <h1>Settings</h1>
                <form>
                    <div className="settings">
                        <label htmlFor="name">Update your profile picture</label>
                        <img src="../assets/user.jpg" className="profile" width="30%"/>
                    </div>
                    <input type="file" className="form-control" name="profile-picture" id="profile-picture" placeholder="Update Profile Pic" />
                    <button type="submit" className="btn btn-form">Update Picture</button>
                </form>

                <form onSubmit={this.handleDeleteUser}>
                    <div className="settings">
                        <label className="delete">Delete your account with us</label>
                    </div>
                    <button type="submit" className="btn btn-leave">Leave ShareMe</button>
                </form>
            </div>
        );
    }
}

export default RouteSettings;