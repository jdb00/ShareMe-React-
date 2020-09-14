import React, { Component } from 'react';
import './App.css';
import API from './API';

class CommentCard extends Component {
    constructor(props) {
        super(props)
    }

    //if title is super long trim it down to a reasonable number of characters and add ellipses, otherwise return original title
    titleLength = (title) => {
        var titleLength = title.length

        if (titleLength > 50){
            var newTitle = title.slice(0, 50)
            newTitle = newTitle.trim()
            return newTitle + '...'
        }
        else{
            return title
        }
    }

    componentDidMount = () => {
    }

    render() {
        var {comment, user} = this.props
        return (
            <div className="comment">
                <div className="comment-info">
                    <img className="user-image" src="/assets/gettyimages-472015658 2.svg" alt=""/>
                    <h3 className="user-name">{user.name}</h3>
                </div>
                <div className="comment-body">
                    <p>{comment}</p>
                    <p className="timestamp">32s</p>
                </div>
            </div>
        );
    }
}

export default CommentCard;