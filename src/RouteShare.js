import React, { Component } from 'react';
import {Router, Link, navigate} from '@reach/router'
import API from './API'
import RouteSplashPage from './RouteSplash'
import RouteLogIn from './RouteLogIn'
import RouteSignUp from './RouteSignUp'
import RouteAddShare from './RouteAddShare'
import RouteUpdateShare from './RouteUpdateShare'
import RouteNavigation from './RouteNavigation'

class RouteShare extends Component {

    handleUpdateClick = () => {
        var {setShareToUpdate,id} = this.props
        setShareToUpdate(id)
    }
    
	handleTrashClick = () => {
        var {id, getshares} = this.props
        API.deleteShare(id)
        getshares()
    }
    
    handleHeartClick = event => event.target.classList.add('like');

    render() {
        var {title,description,image,id} = this.props
        console.log(image)
        return (
            <div className="share-wrap">
                <img className="share-img-top" src={API.serverUrl+image} alt="Share Image"/>
                <div className="share-body">
                    <h5 className="share-title">{title}</h5>
                    <p className="share-description">{description}</p>
                    <div className="icons">
                        <i className="fas fa-heart" onClick={this.handleHeartClick}></i>
                        <Link to={'/shares/'+id+'/update'}><i className="fas fa-edit" onClick={this.handleUpdateClick}></i></Link>
                        <i className="fas fa-trash" onClick={this.handleTrashClick}></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default RouteShare;
