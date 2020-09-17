import React, { Component } from 'react';
import './App.css';
import API from './API';

class CommentAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newComment: ''
        }
    }

    handleChange = (e) => {
        this.setState({newComment:e.target.value})
    }

    handleClick = () =>{
        var {currentUser, currentShare, loadShare} = this.props
        var {newComment} = this.state

        var data = {
            user_id: currentUser.id,
            share_id: parseInt(currentShare),
            comment: newComment
        }

        API.addComment(data).then(res=> loadShare(currentShare))
    }

    componentDidMount(){
    }

    render() {
        var {comment, user} = this.props
        return (
            <div className="add-comment">
                <div className="add-input">
                    <input type="text" name="comment-input" id="comment-input" placeholder="Add a Comment!" onChange={this.handleChange}/>
                    <i className="fas fa-caret-right" onClick={this.handleClick}></i>
                </div>
            </div>
        );
    }
}

export default CommentAdd;






