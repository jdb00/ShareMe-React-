import React, { Component } from 'react';
import { Router, Link, navigate} from '@reach/router'
import './App.css';
import API from './API';

class RouteNewCard extends Component {
    constructor(props) {
        super(props)
    }

    
    handleDeleteClick = ()=>{
       var {id,loadShares} = this.props
       API.deleteShares(id).then(res=>loadShares())
    }

    handleUpdateClick = ()=>{
        
        navigate('/shares/'+this.props.id+'/update')
     }




    render() {
        var {title, image, user, createdAt,id} = this.props
        return (
            <div class="share">
                <div class="box">
                    <div class="left">
                        <img src="https://picsum.photos/id/237/200/300"/>
                    </div>
                <div class="right">
                    <div class="top">
                        <div class="title">{title}</div>
                        <div class="user">By: {<span>username</span>}</div>
                    </div>
                    <div class="line"></div>
                    <div class="bottom">
                        <div class="date">21 July 2020</div>
                        <div class="button">
                            <i class="fas fa-comment share-comment"></i>
                            <i onClick={this.handleUpdateClick} class="fas fa-edit share-edit"></i>
                            <i onClick={this.handleDeleteClick} class="fas fa-trash-alt share-trash"></i>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        );
    }
}

export default RouteNewCard;