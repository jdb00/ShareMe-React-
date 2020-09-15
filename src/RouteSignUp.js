import React, { Component } from 'react';
import API from './API';
import { navigate } from '@reach/router';

class RouteSignUp extends Component {

    handleFormSubmit = (e) => {
        e.preventDefault();

        var formData = new FormData(this.form);
        var data = {
            name: formData.get('name-input'),
            email: formData.get('email-input'),
            password: formData.get('password-input'),
        }

        API.addUser(data).then(res => navigate('/users/authenticate'))

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
                        <div className="logUp">
                            <h1>Sign up</h1>
                            <img src="../assets/signup-faded.svg" alt="" />
                        </div>
                        <form onSubmit={this.handleFormSubmit} ref={(el) => { this.form = el }}>
                            <div className="form-group">
                                <label htmlFor="name-input"></label>
                                <input type="text" className="form-control" name="name-input" id="name-input" aria-describedby="name"
                                    placeholder="Name" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email-input"></label>
                                <input type="email" className="form-control" name="email-input" id="email-input" aria-describedby="email"
                                    placeholder="Email" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password-input"></label>
                                <input type="password" className="form-control" name="password-input" id="password-input" aria-describedby="password"
                                    placeholder="Password" />
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
