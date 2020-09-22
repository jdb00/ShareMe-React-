import React, { Component } from 'react'
import Footer from './footer'
import Header from './header'
import API from './API'
import { navigate } from '@reach/router'

class RouteSettings extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {},
            currentUser: {},
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
            name: formData.get('update-name'),
            email: formData.get('update-email'),
            myStory: formData.get('myStory')
        }
        var { id } = this.props
        API.updateUser(id, data).then(res => {this.props.loadUser()
            navigate('/user/posts')
        })
    }

    handleTrashClick = () => {
        var { currentUser, loadUser } = this.props
        API.deleteUser(currentUser)
        loadUser()
    }

    render() {
        var { myStory, name, email } = this.state.user
        return (
            <div className="app">
                <div className="settings">
                    <Header />
                    <main>
                        <h2>Settings for<br /><span>{name}</span></h2>
                        <div className="logo">
                            <img src="assets/Vector.png" alt="" />
                        </div>
                        <form onSubmit={this.handleFormSubmit} ref={(el) => { this.Form = el }}>
                            <div className="form-group">
                                <label htmlFor="update-name">Update title</label>
                                <input name="update-name" type="text" className="form-control" id="update-name" defaultValue={name} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="myStory">Add description</label>
                                <textarea name="myStory" id="myStory" cols="30" rows="10" defaultValue={myStory}></textarea>
                            </div>

                            <div className="form-group">
                                <label htmlFor="update-email">Update email</label>
                                <input type="email" className="form-control" name='update-email' id="update-email" defaultValue={email} />
                            </div>
                            <div className='buttons'>
                                <button type="submit" className="btn btn-primary">Update</button>
                            </div>
                        </form>
                    </main>
                    <Footer currentUser={this.state.currentUser} />
                </div>
            </div>
        )
    }
}

export default RouteSettings