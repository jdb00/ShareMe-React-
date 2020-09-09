import React, { Component } from 'react'
import './App.css'

class RouteShareModal extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="share-modal">
                <div className="share-container">
                    <i className="fas fa-times"></i>    
                    <img className="share-image" src="/assets/gettyimages-472015658 2.svg" alt=""/>
                    <div className="content">
                        <div className="body-text">
                        <h1 className="title">Lorem, ipsum dolor.</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi sapiente, commodi officia magni labore quae magnam sed illum tenetur deleniti illo doloremque inventore cupiditate modi!</p>
                        <div className="share-info">
                            <p className="date">21 July 2020</p>
                            <p className="user">User: <span>user_name</span></p>
                        </div>
                    </div>

                </div>
                <div className="comments">
                    <div className="comment">
                        <div className="comment-info">
                            <img className="user-image" src="/assets/gettyimages-472015658 2.svg" alt=""/>
                            <h3 className="user-name">user_name</h3>
                        </div>
                        <div className="comment-body">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p className="timestamp">32s</p>
                        </div>
                    </div>

                    <div className="comment">
                        <div className="comment-info">
                            <img className="user-image" src="/assets/gettyimages-472015658 2.svg" alt=""/>
                            <h3 className="user-name">user_name</h3>
                        </div>
                        <div className="comment-body">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p className="timestamp">32s</p>
                        </div>
                    </div>

                    <div className="comment">
                        <div className="comment-info">
                            <img className="user-image" src="/assets/gettyimages-472015658 2.svg" alt=""/>
                            <h3 className="user-name">user_name</h3>
                        </div>
                        <div className="comment-body">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p className="timestamp">32s</p>
                        </div>
                    </div>
                </div>

                <div className="add-comment">
                    <div className="add-input">
                        <input type="text" name="comment-input" id="comment-input" placeholder="Add a Comment!"/>
                        <i className="fas fa-caret-right"></i>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default RouteShareModal;