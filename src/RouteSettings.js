import React, { Component } from 'react'
import {navigate } from '@reach/router'
import Footer from './Footer'
import Header from './Header'
import './App.css'
import API from './API'
import { Spring } from 'react-spring/renderprops'

class RouteSettings extends Component {
    handleLogOutClick = (e) =>{
        e.preventDefault()
        localStorage.removeItem('userId')
        navigate('/')
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        var formData = new FormData(this.addForm)
        var {currentUser, setCurrentUser} = this.props

        if(formData.get('profile-image').size > 0){
            API.uploadFile(formData)
            .then(res => res.data)
            .then(fileName => {
                var data = {
                    name: formData.get('name'),
                    email: formData.get('email'),
                    about_me: formData.get('about-me'),
                    password: formData.get('password'),
                    profile_picture: fileName,
                    type_id:formData.get('type-input'),
                    id: currentUser.id
                }
                API.updateUser(currentUser.id,data)
                .then(res => navigate('/user/'+currentUser.id))
                .then(res=> setCurrentUser(data))
    
            })

        }else{
            var data = {
                name: formData.get('name'),
                email: formData.get('email'),
                about_me: formData.get('about-me'),
                password: formData.get('password'),
                profile_picture: currentUser.profile_picture,
                type_id:formData.get('type-input'),
                id: currentUser.id
            }
            console.log(data)
            API.updateUser(currentUser.id,data)
            .then(res => navigate('/user/'+currentUser.id))
            .then(res=> setCurrentUser(data))
        }
      }

    render() {
        var {currentUser} = this.props
        return (
            <Spring
                from={{opacity: 0}}
                to= {{opacity: 1}}
            >
                {props => (
                    <div className="app" style={props}>
                        <div className="settings">
                            <header>
                                <Header currentUser={currentUser}/>
                            </header>
                            <main>
                                <h1>Settings</h1>
                                <div className="prof-img">
                                    <img src={API.serverURL+currentUser.profile_picture} alt="" />
                                </div>
                                <form onSubmit={this.handleFormSubmit} ref={(el) => {this.addForm = el}}>
                                    <div className="form-group">
                                        <label htmlFor="name">Display Name</label>
                                        <input type="text" className="form-control" id="name" name="name" aria-describedby="name" maxLength="8"
                                            defaultValue={currentUser.name} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="profile_-mage">Update Profile Image</label>
                                        <input type="file" className="form-control" id="profile-image" name="profile-image"/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="text" className="form-control" id="email" name="email" aria-describedby="email"
                                            defaultValue={currentUser.email} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="about-me">About me</label>
                                        <textarea name="about-me" id="about-me" cols="10"
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
                )}
            </Spring>
        )
    }
}

export default RouteSettings