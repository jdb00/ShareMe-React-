import React, { Component } from 'react'
import './App.css'
import API from './API'

class NewCard extends Component {

    handleTrashClick = () => {
        var { id, loadShares } = this.props
        API.deleteShares(id)
        loadShares()
    }

    render() {
        var { share, title, photo, name } = this.props
        return (
            <div className="app">
                <div className="share-card">
                    <div className="photo">
                        <img src={photo ? API.serverUrl + photo : '/mountain.jpeg'} alt='' />
                    </div>
                    <div className="comments">
                        <div className="top">
        <div className="user">Added by: <br/>{name}</div>
                            <div className="button">
                                <i className="fas fa-comment share-comment"></i>
                                <i className="fas fa-edit share-edit"></i>
                                <i className="fas fa-trash-alt share-trash" onClick={this.handleTrashClick}></i>
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