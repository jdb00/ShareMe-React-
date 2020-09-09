import React, { Component } from 'react';
import {navigate} from '@reach/router'
import API from './API'


class RouteAddShare extends Component {
    constructor(props) {
        super(props)
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        var formData = new FormData(this.addForm)
        var data = {
          title: formData.get('title'),
          description: formData.get('description'),
          image: formData.get('pics')
        }
        API.addShare(data).then(res => navigate('/shares'))
      }

    render() {
        return (
            <div className="app">
                <div className="addUpdateShare">
                    <header>
                        <i className="fas fa-chevron-left"></i>
                        <div className="logo">
                            <img src="../assets/ShareMe Logo 1.svg" alt="" />
                        </div>
                        <div className="profimg">
                            <img src="../assets/gettyimages-472015658 2.svg" alt="" />
                        </div>
                    </header>
                    <main>
                        <h2>Add share</h2>
                        <div className="logo">
                            <img src="../assets/Vector.png" alt="" />
                        </div>
                        <form onSubmit={this.handleFormSubmit} ref={(el) => {this.addForm = el}}>
                            <div className="form-group">
                                <label htmlFor="title">Title of your share</label>
                                <input type="text" className="form-control" name="title" id="title" placeholder="Enter the title of the share" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="comment">Description of your share</label>
                                <input type="text" className="form-control" name="description" id="description" placeholder="Description of share" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="pics">Add your image</label>
                                <input type="file" className="form-control" id="pics" name="pics" placeholder="Add a photo" />
                            </div>

                            <button type="submit" className="btn btn-primary">Add</button>
                        </form>
                    </main>
                    <footer>
                        <i className="fas fa-home"></i>
                        <i className="fas fa-plus"></i>
                        <i className="fas fa-cog"></i>
                    </footer>
                </div>
            </div>
        )
    }
}

export default RouteAddShare