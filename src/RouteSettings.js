import React, { Component } from 'react'
import Footer from './footer'
import Header from './header'
import API from './API'
import { navigate } from '@reach/router'

class RouteSettings extends Component {
    constructor(props) {
        super()
        this.state = {
            user: {},
        }
    }

    componentDidMount() {
        var { id } = this.props
        API.getSingleUser(id).then(res => {
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
        API.updateUser(id, data).then(res => navigate('/user/posts'))
    }

    handleTrashClick = () => {
        var { id, loadUser } = this.state.name
        API.deleteUser(id)
        loadUser()
    }

    render() {
        var { name } = this.state.user
        return (
            <div className="app">
                <div className="addUpdateShare">
                    <Header />
                    <main>
                        <h2>Settings for<br/></h2>
                        <div className="logo">
                            <img src="assets/Vector.png" alt="" />
                        </div>
                        <form onSubmit={this.handleFormSubmit} ref={(el) => { this.Form = el }}>
                            <div className="form-group">
                                <label htmlFor="update-title">Update title</label>
                                <input name="update-title" type="text" className="form-control" id="update-title" defaultValue={name} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="update-description">Update description</label>
                                <textarea name="update-description" id="update-description" cols="30" rows="10" defaultValue=''></textarea>
                            </div>

                            <div className="form-group">
                                <label htmlFor="update-image">Update image</label>
                                <input type="email" className="form-control" name='update-image' id="update-image" defaultValue="" />
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

export default RouteSettings