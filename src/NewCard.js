import React, { Component } from 'react'
import { Link } from '@reach/router';
import './App.css'
import API from './API'

class NewCard extends Component {

    handleTrashClick = () => {
        var { id, loadShares } = this.props
        API.deleteShares(id)
        loadShares()
    }

    render() {
        var { share, title, photo, user, currentUser, id } = this.props
        return (
            <div className="app">
                <div className="share-card">
                    <div className="photo">
                        <img src={photo ? API.serverUrl + photo : '/mountain.jpeg'} alt='' />
                    </div>
                    <div className="comments">
                        <div className="top">
                            <div className="user">Added by: <br />{user.name}</div>
                            <div className="button">
                                {
                                    (currentUser && currentUser.id === user.id) ? (
                                        <>
                                            <i className="fas fa-comment share-comment"></i>
                                            <Link to={'/shares/' + id + '/update'}><i className="fas fa-edit share-edit"></i></Link>
                                            <i className="fas fa-trash-alt share-trash" onClick={this.handleTrashClick}></i>
                                        </>
                                    ) : null
                                }
                            </div>
                        </div>
                        <hr />
                        <div className="bottom">
                            <div className="title"><span>Title: </span>{title}</div>
                            <p>{share}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewCard