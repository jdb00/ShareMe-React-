import React, {Component} from 'react';
import {Link, navigate} from '@reach/router'
import API from './API'

class RouteSettings extends Component {

    handleDeleteUser = (e) => {
        e.preventDefault()
        var {currentUser, id} = this.props
        API.deleteUser(currentUser.id).then(res=>{navigate('/splash')
        })
    }

    render() {
        var {currentUser} = this.props 
        return (
            <div className="app">
                <div className="header">
                    <Link to="../shares"><i className="fas fa-times"></i></Link>
                    {currentUser ? <label className="welcome">Welcome, {currentUser.name}</label> : null}
                    <img src="../assets/ShareMe Logo 1.svg" width="200px" height="80px" className="logo" alt="ShareMe Logo"/>
                </div>

                <h1>Settings</h1>
                <form>
                    <div className="settings">
                        <label htmlFor="name">Update your profile picture</label>
                        <img src="../assets/user.jpg" className="profile" width="30%" alt="Profile User"/>
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