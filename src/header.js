import React, { Component } from 'react';
import './App.css'

class Header extends Component {

    render() {
        return (
                <header>
                <i className="fas fa-chevron-left"></i>
                        <div className="logo">
                            <img src="../assets/ShareMe Logo 1.svg" alt="" />
                        </div>
                        <div className="profimg">
                            <img src="../assets/gettyimages-472015658 2.svg" alt="" />
                        </div>
                </header>
        )
    }
}

export default Header