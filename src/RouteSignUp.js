import React, { Component } from 'react';
import {Router, Link, navigate} from '@reach/router'
import API from './API'
import RouteSplashPage from './RouteSplash'
import RouteLogIn from './RouteLogIn'
import RouteShares from './RouteShares'
import RouteAddShare from './RouteAddShare'
import RouteUpdateShare from './RouteUpdateShare'
import RouteNavigation from './RouteNavigation'
import RouteShare from './RouteShare'

class RouteSignUp extends Component {

    validatePassword = (password, password2) => {
        if(password === password2){
            return password
        }
        else{
            return null
        }
    }

    handleFormSubmit = (e) =>{
        e.preventDefault();
        var formData = new FormData(this.form);
        var data = {
            name: formData.get('name-input'),
            email: formData.get('email-input'),
            password: this.validatePassword((formData.get('password-input')), (formData.get('confirm-password')))
        }
        if(data.password !== null){
            var user = API.getUser()
            API.addUser(data).then(res => navigate('/users/login'))  
        }
    }

    render() {
        return (
            <div className="app">
                <div className="header">
                    <Link to="/splash"><i className="fas fa-times"></i></Link>
                </div>
                
                <div className="heading">
                    <h1>Sign up</h1>
                    <img src="../assets/signup-faded.svg" width="100px"/>
                </div>

                <form onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}}>
                    <div className="form-group">
                        <label htmlFor="name"></label>
                        <input type="text" className="form-control" name="name-input" id="name-input" aria-describedby="name" placeholder="Full Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email"></label>
                        <input type="email" className="form-control" name="email-input" id="email-input" aria-describedby="email" placeholder="Email Address" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"></label>
                        <input type="password" className="form-control" name="password-input" id="password-input" aria-describedby="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password"></label>
                        <input type="password" className="form-control" name="confirm-password" id="confirm-password" aria-describedby="confirm-password" placeholder="Confirm password" />
                    </div>
                    <button type="submit" className="btn btn-form">Sign up</button>
                </form>

            </div>
        );
    }
}

export default RouteSignUp;
