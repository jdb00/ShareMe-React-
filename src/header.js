import React, { Component } from 'react';
import {navigate} from '@reach/router'
import './App.css'
import API from './API';

class Header extends Component {
    goBack = () =>{
        window.history.back()
    }

    handleClick = () =>{
        var {currentUser} = this.props
        navigate('/user/'+currentUser.id)
    }

    render() {
        var {currentUser} = this.props
        return (
            <header>
                <div className="header-container">
                    <i className="fas fa-chevron-left" onClick={this.goBack}></i>
                    <div className="logo">
                        <img src="../assets/ShareMe Logo 1.svg" alt="" />
                    </div>
                    <div className="prof-img" onClick={this.handleClick}>
                        <img src={currentUser ? API.serverURL+currentUser.profile_picture:API.defaultUser} alt="" />
                    </div>
                </div>
            </header>
        )
    }
}

export default Header