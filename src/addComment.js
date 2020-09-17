import React, { Component } from 'react';
import './App.css';
import API from './API';

class CommentAdd extends Component {
    constructor(props) {
        super(props)
    }

    handleClick = () => {
        API.addComment()
    }

    render() {
        var {comment, user} = this.props
        return (
            <div className="add-comment">
                <div className="add-input">
                    <input type="text" name="comment-input" id="comment-input" placeholder="Add a Comment!"/>
                    <i className="fas fa-caret-right" onClick="handleClick"></i>
                </div>
            </div>
        );
    }
}

export default CommentAdd;






