import React, { Component } from 'react';
import {navigate} from '@reach/router'
import Footer from './Footer'
import Header from './Header'
import API from './API'
import { Spring } from 'react-spring/renderprops'


class RouteAddShare extends Component {
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
            <Spring
                from = {{opacity: 0}}
                to = {{opacity: 1}}
            >
                {props => (
                    <div className="app" style={props}>
                        <div className="add-update-share">
                            <header>
                                <Header currentUser={currentUser}/>
                            </header>
                                
                                <Spring
                                    from={{marginTop: 10000}}
                                    to={{marginTop: 0}}                             
                                >
                                    {props => (
                                        <main style={props}>
                                            <div className="logo">
                                                <h2>Add share</h2>
                                                <img src="../assets/Vector.png" alt="" />
                                            </div>
                                            <form autoComplete="off" onSubmit={this.handleFormSubmit} ref={(el) => {this.addForm = el}}>
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

                                    )}
                                </Spring>
                                
                            <footer>
                                <Footer />
                            </footer>
                        </div>
                    </div>
                    )}
                </Spring>
        )
    }
}

export default RouteAddShare