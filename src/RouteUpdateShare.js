import React, { Component } from 'react';
import {Link, navigate} from '@reach/router'
import API from './API'

class RouteUpdateShare extends Component {
    constructor(props) {
        super(props)
        this.state ={
            share:{}
        }
    }

    componentDidMount(){
        var {id} = this.props
        API.getOneShare(id).then(res=>this.setState({share:res.data}))
    }

    handleUpdateClick = () => {
		var {setShareToUpdate, id} = this.props
		setShareToUpdate(id)
    }

	handleFormSubmit = (e) => {
        e.preventDefault();
        var formData = new FormData(this.updateForm);
        var data = {
            title:formData.get('title-input'),
			description:formData.get('description-input'),
        }
        var {id} = this.props
        API.updateShare(id,data).then(res=>navigate('/shares'))
    }

    render() {
        var {title, description} = this.state.share
        return (
            <div className="app">
                <div className="header">
                    <Link to="/shares"><i className="fas fa-times"></i></Link>
                </div>

                <form onSubmit={this.handleFormSubmit} ref={(el) => {this.updateForm = el}}>
                    <h3>Edit Share</h3>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" name="title-input" id="title-input" defaultValue={title}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea rows="6" className="form-control" name="description-input" id="description-input" defaultValue={description}></textarea>
                    </div>
                    <button type="submit" className="btn btn-form">Update</button>
                </form>
            </div>
        )
    }
}

export default RouteUpdateShare;
