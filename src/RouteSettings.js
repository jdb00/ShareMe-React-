import React, { Component } from 'react'
import Footer from './footer'
import Header from './header'
import API from './API'
import { navigate } from '@reach/router'
import './App.css'

class RouteSettings extends Component {
    constructor(props) {
        super(props)
        this.state = {
            share: {}
        }
    }

    componentDidMount() {
        var { id } = this.props
        API.getSingleShare(id).then(res => {
            this.setState({ user: res.data })
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

    // handleTrashClick = () => {
    //     var { id, loadUser } = this.state.name
    //     API.deleteUser(id)
    //     loadUser()
    // }

    render() {
        var { photo, name, title, share, email, currentUser } = this.state.share
        return (
            <div className="app">
                <div className="settings">
                    <Header />
                    <main>
                        <h1>User <br />Settings</h1>
                        <form onSubmit={this.handleFormSubmit} ref={(el) => { this.Form = el }}>
                            <div className="form-group">
                                <label htmlFor="name-update">Name</label>
                                <input name="name-update" type="text" className="form-control" id="name-update" defaultValue={title} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="description">About me</label>
                                <textarea name="comment" id="description" cols="10" rows="5" defaultValue={share}></textarea>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email-update">Email</label>
                                <input name="email-update" type="email" className="form-control" id="email-update" defaultValue={email} />
                            </div>

                            <div className="buttons">
                                <button type="submit" className="update">Update</button>
                                <button type="submit" className="sign-out" onClick={this.handleTrashClick}>Delete</button>
                            </div>
                        </form>
                    </main>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default RouteSettings