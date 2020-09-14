import React, { Component } from 'react';
import './App.css';
import API from './API';

class NewCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Marcus',
            title: 'Welcome home',
            share: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sit asperiores molestias. Quae, a odit totam quo esse impedit suscipit assumenda quaerat adipisci quos corrupti, itaque enim eveniet animi ratione.',
        }
    }

    render() {
        return (
            <div className="app">
                <div className="share-card">
                    <div className="photo">
                        <img src="https://picsum.photos/id/237/200/300" />
                    </div>
                    <div className="comments">
                        <div className="top">
                            <div className="user">Added by: <br /><span>{this.state.name}</span></div>
                            <div className="button">
                                <i className="fas fa-comment share-comment"></i>
                                <i className="fas fa-edit share-edit"></i>
                                <i className="fas fa-trash-alt share-trash" onClick={this.deleteShares}></i>
                            </div>
                        </div>
                        <hr />
                        <div className="bottom">
                            <div className="title"><span>Title: </span>{this.state.title}</div>
                            <div className="comment">{this.state.share}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewCard;