import React, { Component } from 'react'
import './App.css'
import API from './API'
import CommentCard from './CommentCard'
import { Link, navigate } from '@reach/router'
import CommentAdd from'./addComment'

class ShareCardEditDelete extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return(<>
                <i className="fas fa-edit share-edit" onClick={this.handleEditClick}></i>
                <i className="fas fa-trash-alt share-trash" onClick={this.handleGarbageClick}></i> 
                </>
        )
    }
}

export default ShareCardEditDelete;