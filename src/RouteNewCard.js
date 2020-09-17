import React, { Component } from 'react';
import './App.css';
import API from './API';
import { navigate } from '@reach/router';
import ReactDOM, { findDOMNode, unmountComponentAtNode } from 'react-dom';

class RouteNewCard extends Component {
    constructor(props) {
        super(props)
    }
    
    handleShareClick = () => {
        var id = this.props.id
        navigate('shares/'+id)
    }

    handleGarbageClick = () => {
        var {id, loadShares} = this.props
        API.deleteShare(id).then(loadShares())
    }

    handleEditClick = () => {
        navigate('/shares/update/' + this.props.id)
    }


    // if title is super long trim it down to a reasonable number of characters and add ellipses, otherwise return original title
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

    render() {
        var {title, image, user, createdAt} = this.props
        return (
            <div className="share-card" id="share-card">
                <div className="left">
                    <img src="https://picsum.photos/id/237/200/300"/>
                </div>
                 <div className="right">
                    <div className="top">
                        <div className="title"  onClick={this.handleShareClick}>{this.titleLength(title)}</div>
                    </div>
                    <div className="line"></div>
                    <div className="bottom">
                        <div className="user">By: <span>{user.name}</span></div>
                        <div className="button">
                            <i className="fas fa-comment share-comment"></i>
                            <i className="fas fa-edit share-edit" onClick={this.handleEditClick}></i>
                            <i className="fas fa-trash-alt share-trash" onClick={this.handleGarbageClick}></i> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RouteNewCard;