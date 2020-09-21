import React, { Component } from 'react'
import {navigate } from '@reach/router'
import Footer from './footer'
import Header from './header'
import './App.css'
import API from './API'

class RouteSettings extends Component {
    handleLogOutClick = (e) =>{
        e.preventDefault()
        localStorage.removeItem('userId')
        navigate('/users/authenticate')
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        var formData = new FormData(this.addForm)

        API.uploadFile(formData)
        .then(res => res.data)
        .then(fileName => {
            var data = {
                name: formData.get('name'),
                email: formData.get('email'),
                about_me: formData.get('about_me'),
                password: formData.get('password'),
                profile_picture: fileName,
                type_id:formData.get('type-input'),
            }
            API.updateUser(this.props.currentUser.id,data).then(res => navigate('/user/'+this.props.currentUser.id))

        })
      }

    render() {
        var {currentUser} = this.props
        return (
            <div className="app">
                <div className="settings">
                    <header>
                        <Header currentUser={currentUser}/>
                    </header>
                    <main>
                        <h1>Settings</h1>
                        <div className="profimg">
                            <img src={API.serverURL+currentUser.profile_picture} alt="" />
                        </div>
                        <form onSubmit={this.handleFormSubmit} ref={(el) => {this.addForm = el}}>
                            <div className="form-group">
                                <label htmlFor="name">Display Name</label>
                                <input type="text" className="form-control" id="name" name="name" aria-describedby="name" maxLength="8"
                                    defaultValue={currentUser.name} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="profile_image">Update Profile Image</label>
                                <input type="file" className="form-control" id="profile_image" name="profile_image" defaultValue={user.profile_picture}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" className="form-control" id="email" name="email" aria-describedby="email"
                                    defaultValue={currentUser.email} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="about_me">About me</label>
                                <textarea name="about_me" id="about_me" cols="10"
                                    rows="5" defaultValue={currentUser.about_me}></textarea>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" name="password" aria-describedby="password"
                                    defaultValue={currentUser.password} />
                            </div>

                            <div className="buttons">
                                <button type="submit" className="update">Update</button>
                                <button type="submit" className="sign-out" onClick={this.handleLogOutClick}>Sign out</button>
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