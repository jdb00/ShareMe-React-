import React, { Component } from 'react';
import './App.css';
import API from './API';
import { navigate } from '@reach/router';

class RouteNewCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            belongsToUser: false
        }
    }
    
    handleUsernameClick = () =>{
        var {user} = this.props
        navigate(/user/+user.id)
    }

    handleShareClick = () => {
        var id = this.props.id
        navigate('/shares/'+id)
    }

    handleGarbageClick = () => {
        var {id, loadShares} = this.props
        API.deleteShare(id).then(loadShares())
    }

    handleEditClick = () => {
        navigate('/shares/update/' + this.props.id)
    }

    titleLength = (title) => {
        if(title === undefined){
            return this.props.title
        }
        else{
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
    
    componentDidMount(){
        this.checkUser()
    }

    render() {
        var {title, image, user} = this.props
        let button
        if(this.state.belongsToUser){
            button = 
            <>
            <i className="fas fa-edit share-edit" onClick={this.handleEditClick}></i>
            <i className="fas fa-trash-alt share-trash" onClick={this.handleGarbageClick}></i> 
            </>
        }else{
            button = null
        }
        return (
            <div className="share-card" id="share-card">
                <div className="left">
                    <img src={image ? API.serverURL+image : API.defaultImage} alt="share"/>
                </div>
                 <div className="right">
                    <div className="top">
                        <div className="title"  onClick={this.handleShareClick}>{this.titleLength(title)}</div>
                    </div>
                    <div className="line"></div>
                    <div className="bottom">
                        <div className="user" onClick={this.handleUsernameClick}>By: <span>{user.name}</span></div>
                        <div className="button">
                            <span>{this.props.comments.length}</span>
                            <i className="fas fa-comment share-comment"></i>
                            {button}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RouteNewCard;