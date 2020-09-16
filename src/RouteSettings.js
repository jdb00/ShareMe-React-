import React, { Component } from 'react'
import Footer from './footer'
import Header from './header'
import {navigate} from '@reach/router'
import './App.css'

class RouteSettings extends Component {
    constructor(props){
        super(props)
        this.state = {
          currentUser: null
        }
      }
    setCurrentUser = (user) => {
        this.setState({currentUser:user})
      }

      handleLogoutClick = (e) => {
        e.preventDefault()
        localStorage.removeItem('userId')
        this.setState({currentUser:null})
        navigate('/user/posts')
      }

    render() {
        var {  user } = this.props
        return (
            <div className="app">
                <div className="settings">
                        <Header />
                    <main>
                        <h1>Settings</h1>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" aria-describedby="name"
                                    placeholder={user} />
                                <i className="fas fa-edit"></i>
                            </div>

                            <div className="form-group">
                                <label htmlFor="user-name">User name</label>
                                <input type="text" className="form-control" id="user-name" aria-describedby="user-name"
                                    placeholder="The_Real_Jim_Carry" />
                                <i className="fas fa-edit"></i>
                            </div>

                            <div className="form-group">
                                <label htmlFor="description">About me</label>
                                <textarea name="comment" defaultValue='' id="description" cols="10"
                                    rows="5" placeholder='Add a comment'></textarea>
                                <i className="fas fa-edit"></i>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emai"
                                    placeholder="jimcarry@gmail.com" />
                                <i className="fas fa-edit"></i>
                            </div>

                            <div className="buttons">
                                <button type="submit" className="update">Update</button>
                                <button type="submit" className="sign-out" onClick={this.handleLogoutClick}>Sign out</button>
                            </div>
                        </form>
                    </main>
                    <footer>
                        <Footer />
                    </footer>
                </div>
            </div>
        )
    }
}

export default RouteSettings