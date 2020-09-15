import React, { Component } from 'react';
import { Link } from '@reach/router'
import './App.css'

class Footer extends Component {

    render() {
        return (
                <footer>
                    <Link to='/user/posts'><i className="fas fa-home"></i></Link>
                    <Link to='/shares/add'><i className="fas fa-plus"></i></Link>
                    <Link to='/user/settings'><i className="fas fa-cog"></i></Link>
                </footer>
        )
    }
}

export default Footer