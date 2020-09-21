import React, { Component } from 'react';
import './App.css';
import API from './API';
import { navigate } from '@reach/router';

class CommentCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            belongsToUser: null
        }
    }

    handleUsernameClick = () =>{
        var {user} = this.props
        navigate(/user/+user.id)
    }

    handleDeleteClick = () =>{
        var {id, loadShare} = this.props
        API.deleteComment(id).then(res=> loadShare())
    }

    checkUser = () =>{
        var {currentUser, user} = this.props
        if(currentUser.id === user.id){
            this.setState({belongsToUser: true})
        }
        else{
            this.setState({belongsToUser: false})
        }
    }

    formatTimestamp = (timeStamp) => {
        timeStamp = new Date(timeStamp)
        var seconds = Math.floor((new Date() - timeStamp) / 1000);

        var interval = seconds / 31536000;

        if (interval > 1) {
            return Math.floor(interval) + "yrs";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + "months";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " days";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + "hrs";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + "mins";
        }
        return Math.floor(seconds) + "s";
        
    }

    componentDidMount(){
        this.checkUser()
    }

    render() {
        var {comment, user, createdAt} = this.props
        let deleteButton
        if(this.state.belongsToUser){
            deleteButton = 
            <>
            <i className="comment-delete fas fa-times" onClick={this.handleDeleteClick}></i>
            </>
        }else{
            deleteButton = null
        }
        return user ? (
            <div className="comment">
                <div className="comment-info">
                    <div className="comment-info-container">
                        <img className="user-image" src={user.profile_picture ? API.serverURL+user.profile_picture : API.defaultUser } alt=""/>
                        <h3 className="user-name" onClick={this.handleUsernameClick}>{user.name}</h3>
                    </div>
                    {deleteButton}
                </div>
                <div className="comment-body">
                    <p className="comment-text">{comment}</p>
                    <p className="timestamp">{this.formatTimestamp(createdAt)}</p>
                </div>
            </div>
        ) : null
    }
}

export default CommentCard;