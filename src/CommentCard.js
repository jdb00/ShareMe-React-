import React, { Component } from 'react';
import './App.css';
import API from './API';
import { navigate } from '@reach/router';

class CommentCard extends Component {
    constructor(props) {
        super(props)
    }

    handleUsernameClick = () =>{
        var {user} = this.props
        navigate(/user/+user.id)
    }

    render() {
        var {comment, user} = this.props
        return user ? (
            <div className="comment">
                <div className="comment-info">
                    <img className="user-image" src="/assets/gettyimages-472015658 2.svg" alt=""/>
                    <h3 className="user-name" onClick={this.handleUsernameClick}>{user.name}</h3>
                </div>
                <div className="comment-body">
                    <p>{comment}</p>
                    <p className="timestamp">32s</p>
                </div>
            </div>
        ) : null
    }
}

export default CommentCard;