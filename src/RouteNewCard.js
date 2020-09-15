import React, { Component } from 'react';
import './App.css';
import API from './API';
import { navigate } from '@reach/router';

class RouteNewCard extends Component {
    constructor(props) {
        super(props)
    }
    
    handleShareClick = () => {
        var id = this.props.id
        navigate('shares/'+id)
    }

    handleGarbageClick = () => {
        console.log('nice click')
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

    componentDidMount = () => {
        console.log(this.props)
    }

    render() {
        var {title, image, user, createdAt} = this.props
        return (
            <div className="share-card" onClick={this.handleShareClick}>
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
                            <i className="fas fa-trash-alt share-trash" onClick={this.handleGarbageClick}></i> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RouteNewCard;