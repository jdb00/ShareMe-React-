import React, { Component } from 'react';
import './App.css';
import API from './API';

class NewCard extends Component {
    constructor(props) {
        super(props)
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
                            <div className="user">Added by: <span>Jimmy</span></div>
                            <div className="button">
                                <i className="fas fa-comment share-comment"></i>
                                <i className="fas fa-edit share-edit"></i>
                                <i className="fas fa-trash-alt share-trash" onClick={this.deleteShares}></i>
                            </div>
                        </div>
                        <hr/>
                        <div className="bottom">
                            <div className="comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, cumque officiis. Blanditiis, placeat repellendus qui quibusdam architecto quasi exercitationem magnam vel obcaecati dolorum excepturi ad delectus cupiditate numquam assumenda unde iste rerum omnis adipisci iure in. Assumenda nostrum impedit maxime dicta. A, aspernatur! Ipsam alias id ipsum placeat. Enim, labore! </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewCard;