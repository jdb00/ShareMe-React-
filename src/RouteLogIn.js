import React, { Component } from 'react';
import {Link, navigate} from '@reach/router'
import API from './API'

class RouteLogIn extends Component {

    constructor(props){
        super(props)

    this.state = {
        message: ''     
      }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        var formData = new FormData(this.form);
        var data = {
            email: formData.get('email-input'),
            password: formData.get('password-input'),
        }

        var {setCurrentUser} = this.props

        API.authenticate(data)
            .then(res => {
                var user = res.data
                return user
            })
            .then(user => {
                if (user) {
                    setCurrentUser(user)
                    localStorage.setItem('userId', user.id)
                    navigate('/shares')
                } else {
                    this.setState({message: 'Details were incorrect, could you please try again' })
                }
            })
    }

    render() {
        return (
            <div className="app">

                <div className="header">
                    <Link to="/splash"><i className="fas fa-times"></i></Link>
                </div>

                <div className="heading">
                    <h1>Log in</h1>
                    <img src="../assets/signup-faded.svg" width="100px" alt="ShareMe Sign Up"/>
                </div>

                <form onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}}>
                    <div className="form-group">
                        <label htmlFor="email"></label>
                        <input type="email" className="form-control" name="email-input" id="email-input" aria-describedby="email" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"></label>
                        <input type="password" className="form-control" name="password-input" id="password-input" aria-describedby="password" placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-form">Go</button>
                    <p>{this.state.message}</p>
                </form>

            </div>
        );
    }
}

export default RouteLogIn;
