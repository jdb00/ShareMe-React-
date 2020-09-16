import React, { Component } from 'react'
import Footer from './footer'
import Header from './header'
import API from './API'
import { navigate } from '@reach/router';
import './App.css'

class RouteUpdateShare extends Component {

    handleFormSubmit = (e) => {
        e.preventDefault()
    
        var formData = new FormData(this.form)
    
        var data = {
          name:formData.get('name-input'),
          description:formData.get('description-input'),
          type_id:formData.get('type-input')
        }
        var {id} = this.props;
        API.updateProject(id,data).then(res => navigate('/projects')) 
      }

    render() {
        return (
            <div className="app">
                <div className="addUpdateShare">
                        <Header />
                    <main>
                        <h2>Update share</h2>
                        <div className="logo">
                            <img src="assets/Vector.png" alt="" />
                        </div>
                        <form>
                            <div className="form-group">
                                <label htmlFor="update-title">Update title</label>
                                <input type="text" className="form-control" id="updatetitle" aria-describedby="update-title"
                                    placeholder="Update title of share" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="update-description">Update description</label>
                                <textarea name="comment" defaultValue='' id="update-description" cols="30" rows="10" placeholder='Update comment'></textarea>
                            </div>

                            <div className="form-group">
                                <label htmlFor="update-image">Update image</label>
                                <input type="file" className="form-control" name='update-image' id="update-image" placeholder="Update photo" />
                            </div>

                            <button type="submit" className="btn btn-primary">Update</button>
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

export default RouteUpdateShare