import React, { Component } from 'react'
import { navigate } from '@reach/router'
import Footer from './footer'
import API from './API';

class RouteLogIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: '',
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        var formData = new FormData(this.form);
        var data = {
            users: formData.get('name-input'),
            password: formData.get('password-input'),
        }

        var { setCurrentUser } = this.props

        API.authenticate(data)
            .then(res => {
                var user = res.data
                return user
            })
            .then(user => {
                if (user) {
                    setCurrentUser(user)
                    localStorage.setItem('userId', user.id)
                    navigate('/user/posts')
                } else {
                    this.setState({ message: 'Try again' })
                }
            })
    }

    handleBackClick = () => {
        navigate(-1)
    }

    render() {
        return (
            <div className="app">
                <div className="signIn">
                    <header>
                        <i className="fas fa-chevron-left" onClick={this.handleBackClick}></i>
                        <div className="logo">
                            <img src='../assets/ShareMe Logo 1.svg' alt="" />
                        </div>
                    </header>
                    <main>
                        <div className="logIn">
                            <h1>Sign in</h1>
                            <img src='../assets/signup-faded.svg' alt="" />
                        </div>
                        <form onSubmit={this.handleFormSubmit} ref={(el) => { this.form = el }}>
                            <div className="form-group">
                                <label htmlFor="name-input"></label>
                                <input type="text" className="form-control" id="name-input" name="name-input"
                                    placeholder="Name" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password-input"></label>
                                <input type="password" className="form-control" id="password-input" name="password-input"
                                    placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-primary">Log In</button>
                            <p>{this.state.message}</p>
                        </form>
                    </main>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default RouteLogIn;
