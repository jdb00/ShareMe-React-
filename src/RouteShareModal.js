import React, { Component } from 'react'
import './App.css'
import API from './API'
import CommentCard from './CommentCard'
import { Link, navigate } from '@reach/router'

class RouteShareModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [
                {
                    id: 40,
                    user_id: 2,
                    share_id: 1600141887518,
                    comment: 'blablablabla',
                    user: {

                    }
                }
            ],
            share:{

            },
        }
    }

    componentDidMount(){
        //todo: get comments from share need virtual?
        this.loadShare()
    }

    loadShare = () => {
        var {id} = this.props
   
        API.getShare(id).then(res => {
            this.setState({share: res.data})
            this.setState({comments: res.data.comments})
        })
    }

    goBack = () =>{
        // console.log(this.state.comments)
        window.history.back()
    }


    render() {
        var {description, image, title}  = this.state.share
        var {user} = this.props
        return title ? (
            <div className="share-modal">
                <div className="share-container">
                    <i className="fas fa-times" onClick={this.goBack}></i>    
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
                            key: "comment" + comment.id,
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
        ):null
    }
}

export default RouteShareModal;