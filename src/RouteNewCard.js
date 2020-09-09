import React, { Component } from 'react';
import './App.css';

class RouteNewCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="app">
                <div class="box">
                    <div class="left">
                        <img src="https://picsum.photos/id/237/200/300"/>
                    </div>
                <div class="right">
                    <div class="top">
                        <div class="title">Title</div>
                        <div class="user">By: user_name</div>
                    </div>
                    <div class="line"></div>
                    <div class="bottom">
                        <div class="date">21 July 2020</div>
                        <div class="button">
                            <i class="fas fa-comment share-comment"></i>
                            <i class="fas fa-edit share-edit"></i>
                            <i class="fas fa-trash-alt share-trash"></i> 
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        );
    }
}

export default RouteNewCard;