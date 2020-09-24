import React, { Component } from 'react';
import {Link, navigate} from '@reach/router'
import API from './API'

class RouteAddShare extends Component {

	handleFormSubmit = (e) => {
        e.preventDefault()
        var formData = new FormData(this.Form)

        API.uploadFile(formData)
        .then(res=>res.data)

        .then(fileName => {
        var data = {
            title:formData.get('title-input'),
			description:formData.get('description-input'),
			image:fileName,
        }
        API.addShare(data).then(res => navigate('/shares'))
        })
    }

    render() {
        return (
            <div className="app">
                <div className="header">
                    <Link to="../../shares"><i className="fas fa-times"></i></Link>
                    <img src="../assets/ShareMe Logo 1.svg" width="200px" height="80px" className="logo" alt="ShareMe Logo"/>
                </div>
                
                <h3>Add New Share</h3>
                <form onSubmit={this.handleFormSubmit} ref={(el) => {this.Form = el}}>
                    <label>Let the world know...</label>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" name="title-input" id="title-input" placeholder="Title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea rows="6" className="form-control" name="description-input" id="description-input" placeholder="Description"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <input type="file" className="form-control" name="image-input" id="image-input" placeholder="Image URL. e.g. /assets/default.jpg" />
                    </div>
                    <button type="submit" className="btn btn-form">Submit</button>
                </form>
            </div>
        )
    }
}

export default RouteAddShare;
