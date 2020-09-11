import React, { Component } from 'react'
import {Link, navigate} from '@reach/router'
import API from './API';

class RouteLogIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message:''
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        var formData = new FormData(this.form);
        var data = {
          email:formData.get('email'),
          password:formData.get('password'),
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
            localStorage.setItem('users',user.id)
            navigate('user/posts')
          }else{
            this.setState({message:'This was wrong'})
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
                        <form onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}}>
                            <div className="form-group">
                                <label htmlFor="email"></label>
                                <input type="email" className="form-control" id="email" name="email"
                                    placeholder="Email" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password"></label>
                                <input type="text" className="form-control" id="password" name="password"
                                    placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-primary">Sign In</button>
                        </form>
                    </main>
                    <footer>

                    </footer>
                </div>
            </div>
        )
    }
}

export default RouteLogIn;
