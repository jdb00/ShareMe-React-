import React, { Component } from 'react';
import { Link } from '@reach/router'
import './App.css'

class Footer extends Component {

    render() {
        var { currentUser} = this.props
        return (
            <footer>
                <Link to='/user/posts'><i className="fas fa-home"></i></Link>
                {
                    (currentUser ? (
                        <>
                            <Link to='/shares/add'><i className="fas fa-plus"></i></Link>
                            <Link to={'/users/'+ currentUser.id +'/settings'}><i className="fas fa-cog"></i></Link>
                        </>
                     ) : <p>Please log in to use more features</p>)
                }
            </footer>
        )
    }
}

export default Footer