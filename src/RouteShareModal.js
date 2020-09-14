import React, { Component } from 'react'
import './App.css'
import API from './API'
import CommentCard from './CommentCard'

class RouteShareModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [
                {
                    id: 1,
                    comment: 'Small comment',
                    user: {
                        id: 1,
                        name: 'Jordan',
                    }
                },
                {
                    id: 3,
                    comment: 'This is a medium comment',
                    user: {
                        id:2,
                        name: 'Marcus'
                    }
                },
                {
                    id: 2,
                    comment: 'This is a really really big big long comment',
                    user: {
                        id:3,
                        name: 'Jay'
                    }
                },

            ]
        }
    }

    //remember to remove this
    componentDidMount = () => {
        //todo: get comments from share need virtual?
    }

    loadComments = (id) => {
        API.loadComments(id).then(res =>{
            this.setState({comments: res.data})
        })
    }

    render() {
        var {description, image, title}  = this.props.targetShareProps
        var {user} = this.props
        return (
            <div className="share-modal">
                <div className="share-container">
                    <i className="fas fa-times"></i>    
                    <img className="share-image" src="/assets/gettyimages-472015658 2.svg" alt=""/>
                    <div className="content">
                        <div className="body-text">
                        <h1 className="title">{title}</h1>
                            <p>{description}</p>
                        <div className="share-info">
                            <p className="date"></p>
                            <p className="user">User: <span>{user.name}</span></p>
                        </div>
                    </div>

                </div>
                <div className="comments">
                    {this.state.comments.map((comment)=>{
                        var commentProps = {
                            ...comment,
                            key: comment.id,
                        }

                        return (<CommentCard {...commentProps}/>)
                    })
                }
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