import React, { Component } from 'react';
import {navigate} from '@reach/router'
import Footer from './footer'
import Header from './header'
import API from './API'


class RouteAddShare extends Component {
    constructor(props) {
        super(props)
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        var formData = new FormData(this.addForm)

        API.uploadFile(formData)
        .then(res => res.data)
        .then(fileName => {
            var {currentUser} = this.props;
            var data = {
                title: formData.get('title'),
                description: formData.get('description'),
                user_id: currentUser.id,
                image: fileName,
                type_id:formData.get('type-input'),
            }
            API.addShare(data).then(res => navigate('/shares'))
        })
      }

    render() {
        var {currentUser} = this.props
        return (
            <div className="app">
                <div className="addUpdateShare">
                    <header>
                        <Header currentUser={currentUser}/>
                    </header>
                    <main>
                        <h2>Add share</h2>
                        <div className="logo">
                            <img src="../assets/Vector.png" alt="" />
                        </div>
                        <form onSubmit={this.handleFormSubmit} ref={(el) => {this.addForm = el}}>
                            <div className="form-group">
                                <label htmlFor="title">Title of your share</label>
                                <input type="text" defaultValue='' className="form-control" name="title" id="title" placeholder='Enter the title of the share'/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="comment">Description of your share</label>
                                <textarea defaultValue='' name="description" id="description" cols="30" rows="10" placeholder='Enter a comment'></textarea>
                            </div>

                            <div className="form-group">
                                <label htmlFor="pics">Add your image</label>
                                <input type="file" className="form-control" id="pics" name="pics" placeholder="Add a photo" />
                            </div>

                            <button type="submit" className="btn btn-primary">Add</button>
                        </form>
                    </main>
                    <footer>
                        <Footer />
                    </footer>
                </div>
            </div>
        )
    }
}

export default RouteAddShare