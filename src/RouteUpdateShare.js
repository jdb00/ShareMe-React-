import React, { Component } from 'react'
import Footer from './footer'
import Header from './header'
import API from './API'
import { navigate } from '@reach/router';
import './App.css'

class RouteUpdateShare extends Component {
    constructor(props) {
        super(props)
        this.state = {
            share: {}
        }
    }

    componentDidMount() {
        var { id } = this.props
        API.getSingleShare(id).then(res => {
            this.setState({ share: res.data })
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()

        var formData = new FormData(this.Form)

        var data = {
            title: formData.get('update-title'),
            share: formData.get('update-description'),
            // photo: formData.get('update-image')
        }
        var { id } = this.props
        API.updateShares(id, data).then(res => navigate('/user/posts'))
    }

    render() {
        var { photo, title, share, currentUser } = this.state.share
        return (
            <div className="app">
                <div className="addUpdateShare">
                    <Header />
                    <main>
                        <h2>Update share</h2>
                        <div className="logo">
                            <img src="assets/Vector.png" alt="" />
                        </div>
                        <form onSubmit={this.handleFormSubmit} ref={(el) => { this.Form = el }}>
                            <div className="form-group">
                                <label htmlFor="update-title">Update title</label>
                                <input name="update-title" type="text" className="form-control" id="update-title" defaultValue={title} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="update-description">Update description</label>
                                <textarea name="update-description" id="update-description" cols="30" rows="10" defaultValue={share}></textarea>
                            </div>

                            <div className="form-group">
                                <label htmlFor="update-image">Update image</label>
                                <input type="file" className="form-control" name='update-image' id="update-image" defaultValue={photo} />
                            </div>

                            <button type="submit" className="btn btn-primary">Update</button>
                        </form>
                    </main>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default RouteUpdateShare