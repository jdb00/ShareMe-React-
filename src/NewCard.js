import React, { Component } from 'react';
import './App.css';
import API from './API';

class NewCard extends Component {
    constructor(props) {
        super(props)
    }
    
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

    // deleteShares = () => {
	// 	var {id,loadUsers} = this.props
    //     API.deleteShares(id)
    //     loadUsers()
	// }

    render() {
        var {title, image, user, createdAt} = this.props
        return (
            <div className="share-card">
                <div className="left">
                    <img src="https://picsum.photos/id/237/200/300"/>
                </div>
            <div className="right">
                <div className="top">
                    <div className="title">{this.titleLength(title)}</div>
                </div>
                <div className="line"></div>
                <div className="bottom">
                    <div className="user">By: <span>{user.name}</span></div>
                    <div className="button">
                        <i className="fas fa-comment share-comment"></i>
                        <i className="fas fa-edit share-edit"></i>
                        <i className="fas fa-trash-alt share-trash" onClick={this.deleteShares}></i> 
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default NewCard;