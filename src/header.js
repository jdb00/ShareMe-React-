import React, { Component } from 'react';
import { navigate } from '@reach/router';
import './App.css'

class Header extends Component {

    handleBackClick = () => {
        navigate(-1)
    }
    
    render() {
        return (
            <header>
                <i className="fas fa-chevron-left" onClick={this.handleBackClick}></i>
                <div className="logo">
                    <img src="/assets/ShareMe Logo 1.svg" alt="" />
                </div>
                <div className="profimg">
                    <img src="/assets/avatar.jpg" alt="" />
                </div>
            </header>
        )
    }
}

export default Header