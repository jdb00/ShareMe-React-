import React, { Component } from 'react'
import {navigate} from '@reach/router'
import './App.css';
import API from './API'
import { Spring } from 'react-spring/renderprops'

class RouteLogIn extends Component {
    handleFormSubmit = (e) => {
        e.preventDefault()
        var formData = new FormData(this.form);
        var data = {
          email:formData.get('email'),
          password:formData.get('password'),
        }
    
        var {setCurrentUser} = this.props

        console.log(data)
    
        API.authenticate(data)
        .then(res => {
            var user = res.data
            return user
        })
        .then(user => {
            if(user){
                setCurrentUser(user)
                localStorage.setItem('userId',user.id)
                navigate('/shares')
            }else{
                this.setState({message:'Try again'})
            }
        })
    }

    render() {
        return (
            <Spring
                from={{opacity:0,}}
                to={{opacity:1,}}
            >
                {props =>(
                    <div className="app" style={props}>
                        <div className="sign-in">
                            <header>
                                <div className="logo">
                                <img src='../assets/ShareMe Logo 1.svg' alt="" />
                                </div>
                            </header>
                            <main>
                                <div className="sign-in">
                                    <h1>Sign in</h1>
                                    <img src='../assets/signup-faded.svg' alt="" />
                                </div>

                                <form autoComplete="off" onSubmit={this.handleFormSubmit} ref={(el)=> {this.form = el}} >
                                    <div className="form-group">
                                        <label htmlFor="email"></label>
                                        <input type="email" className="form-control" id="email" name="email" aria-describedby="email"
                                            placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password"></label>
                                        <input type="password" className="form-control" id="password" aria-describedby="password" name="password"
                                            placeholder="Password" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Sign In</button>
                                </form>
                            </main>
                            <footer>

                            </footer>
                        </div>
                    </div>
                )}
            </Spring>
        )
    }
}

export default RouteLogIn;
