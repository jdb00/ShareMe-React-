import React, { Component } from 'react';
import { Router, Link, navigate} from '@reach/router'
import './App.css'

class Header extends Component {
    goBack = () =>{
        window.history.back()
    }

    render() {
        return (
                <header>
                    <div class="header-container">
                        <i className="fas fa-chevron-left" onClick={this.goBack}></i>
                        <div className="logo">
                            <img src="../assets/ShareMe Logo 1.svg" alt="" />
                        </div>
                        <div className="profimg">
                            <Link to="/user/shares">
                                <img src="../assets/gettyimages-472015658 2.svg" alt="" />
                            </Link>
                        </div>
                    </div>
                </header>
        )
    }
}

export default Header