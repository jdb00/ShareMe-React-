import React, { Component } from 'react'
import './App.css'
import API from './API'
import CommentCard from './CommentCard'
import CommentAdd from'./CommentAdd'

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
        window.history.back()
    }

    render() {
        var {description, image, title}  = this.state.share
        var {user} = this.state
        return title ? (
            <div className="share-modal">
                <div className="share-container">
                    <i className="modal-close fas fa-times" onClick={this.goBack}></i>    
                    <img className="share-image" src={image ? API.serverURL+image : API.defaultImage}alt=""/>
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
                            currentUser: this.props.currentUser,
                            loadShare: this.loadShare,
                            key: "comment" + comment.id,
                        }
                        {/* ask trung how to not go through all trash comments or something it goes through so many without shareid/userid can i put this if statement any earlier */}      
                        if(comment.user != null){
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