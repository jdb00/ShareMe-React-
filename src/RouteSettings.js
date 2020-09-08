import React, { Component } from 'react';
import './App.css';

class RouteSettings extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="app">
            <div className="settings">
                <header>
                    <i className="fas fa-chevron-left"></i>
                    <div className="logo">
                        <img src="../assets/ShareMe Logo 1.svg" alt=""/>
                    </div>
                    <div className="profimg">
                        <img src="../assets/gettyimages-472015658 2.svg" alt=""/>
                    </div>
                </header>
                <main>
                    <h1>Settings</h1>
                    <div className="profimg">
                        <img src="../assets/gettyimages-472015658 2.svg" alt=""/>
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" aria-describedby="name"
                                placeholder="Jim"/>
                            <i className="fas fa-edit"></i>
                        </div>
    
                        <div className="form-group">
                            <label htmlFor="user-name">User name</label>
                            <input type="text" className="form-control" id="user-name" aria-describedby="user-name"
                                placeholder="The_Real_Jim_Carry"/>
                            <i className="fas fa-edit"></i>
                        </div>
    
                        <div className="form-group">
                            <label htmlFor="description">About me</label>
                            <textarea name="comment" defaultValue='Add a comment' id="description" cols="10"
                                rows="5"></textarea>
                            <i className="fas fa-edit"></i>
                        </div>
    
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emai"
                                placeholder="jimcarry@gmail.com"/>
                            <i className="fas fa-edit"></i>
                        </div>
                            
                        <div className="buttons">
                            <button type="submit" className="update">Update</button>
                            <button type="submit" className="sign-out">Sign out</button>
                        </div>
                    </form>
                </main>
                <footer>
                    <i className="fas fa-home"></i>
                    <i className="fas fa-plus"></i>
                    <i className="fas fa-cog"></i>
                </footer>
            </div>
        </div>
        )
    }
}

export default RouteSettings