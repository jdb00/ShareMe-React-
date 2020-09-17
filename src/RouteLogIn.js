import React, { Component } from 'react'
import {Link, navigate} from '@reach/router'
import './App.css';

class RouteLogIn extends Component {
    constructor(props) {
        super(props)
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        var formData = new FormData(this.form);
        var data = {
          username:formData.get('username-input'),
          password:formData.get('password-input'),
        }
    
        var {setCurrentUser} = this.props
    
        API.authenticate(data)
        .then(res => {
        var user = res.data
        return user
        })
        .then(user => {
            if(user){
                setCurrentUser(user)
                localStorage.setItem('userId',user.id)
                navigate('/projects')
            }else{
                this.setState({message:'Try again'})
            }
        })
    }

    render() {
        return (
            <div className="app">
                <div className="signIn">
                    <header>
                        <div className="logo">
                        <img src='../assets/ShareMe Logo 1.svg' alt="" />
                        </div>
                    </header>
                    <main>
                        <div className="signIn">
                            <h1>Sign in</h1>
                            <img src='../assets/signup-faded.svg' alt="" />
                        </div>
                        <form>

                            <div className="form-group">
                                <label htmlFor="email"></label>
                                <input type="email" className="form-control" id="email" aria-describedby="email"
                                    placeholder="Email" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password"></label>
                                <input type="text" className="form-control" id="password" aria-describedby="password"
                                    placeholder="Password" />
                            </div>

                        </form>

                        <button type="submit" className="btn btn-primary"><Link to='/user/posts'>Sign In</Link></button>

                    </main>
                    <footer>

                    </footer>
                </div>
            </div>
        )
    }
}

export default RouteLogIn;
