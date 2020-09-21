import React, { Component } from 'react'
import './App.css'
import API from './API'
import CommentCard from './CommentCard'
import { Link, navigate } from '@reach/router'
import CommentAdd from'./addComment'

class RouteShareModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [
                {
                }
            ],
            share:{

            },
            user:{}
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
            this.setState({user: res.data.user})
        })
    }

    goBack = () =>{
        // console.log(this.state.comments)
        window.history.back()
    }


    render() {
        var {description, image, title}  = this.state.share
        var {user} = this.state
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
                        if(user != null){
                            return (<CommentCard {...commentProps}/>)
                        }
                    })
                }
                </div>

                <CommentAdd currentUser={this.props.currentUser} currentShare={this.props.id} loadShare={this.loadShare}/>
                
            </div>
        </div>
        ):null
    }
}

export default RouteShareModal;