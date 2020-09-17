import React, { Component } from 'react';
import { Link, navigate } from '@reach/router'
import './App.css'
import RouteNewCard from './RouteNewCard'
import API from './API'

class Footer extends Component {
    constructor(props) {
        super(props)
    }

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