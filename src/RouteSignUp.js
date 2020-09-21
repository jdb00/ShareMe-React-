import React, { Component } from 'react';
import './App.css';
import API from './API';
import { navigate } from '@reach/router';

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
            password: this.validatePassword((formData.get('password-input')), (formData.get('confirm-password'))),
            profile_picture: '1600664160374default-user.png'
        }
        if(data.password !== null){
            API.addUser(data).then(res => navigate('/users/authenticate'))  
        }
    }

    render() {
        return (
            <div className="app">
                <div className="signUp">
                    <header>
                        <div className="logo">
                            <img src='../assets/ShareMe Logo 1.svg' alt="" />
                        </div>
                    </header>
                    <main>
                        <div className="signUp">
                            <h1>Sign up</h1>
                            <img src="../assets/signup-faded.svg" alt="" />
                        </div>
                        <form onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}}>
                            <div className="form-group">
                                <label htmlFor="name"></label>
                                <input type="text" className="form-control" name="name-input" id="name-input" aria-describedby="name"
                                    placeholder="Name" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email"></label>
                                <input type="email" className="form-control" name="email-input" id="email-input" aria-describedby="email"
                                    placeholder="Email" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password"></label>
                                <input type="password" className="form-control" name="password-input" id="password-input" aria-describedby="password"
                                    placeholder="Password" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="confirm-password"></label>
                                <input type="password" className="form-control" name="confirm-password" id="confirm-password" aria-describedby="confirm-password"
                                    placeholder="Confirm password" />
                            </div>
                            <button type="submit" className="btn btn-primary">Sign up</button>
                        </form>


                    </main>
                    <footer>

                    </footer>
                </div>
            </div>
        );
    }
}

export default RouteSignUp;
