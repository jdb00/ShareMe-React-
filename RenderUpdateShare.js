import React, { Component } from 'react';
import logo from './sharemelogo.svg';
import './App.css';

class UpdateShare extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="app">
            <div className="addUpdateShare">
                <header>
                    <i className="fas fa-chevron-left"></i>
                    <div className="logo">
                        <img src="assets/ShareMe Logo 1.svg" alt=""/>
                    </div>
                    <div className="profimg">
                        <img src="assets/gettyimages-472015658 2.svg" alt=""/>
                    </div>
                </header>
                <main>
                    <h2>Update share</h2>
                    <div className="logo">
                        <img src="assets/Vector.png" alt=""/>
                    </div>
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Update title</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                placeholder="Update title of share"/>
                        </div>
    
                        <div className="form-group">
                            <label for="exampleInputPassword1">Update description</label>
                            <textarea name="comment" id="" cols="30" rows="10">Update comment</textarea>
                        </div>
    
                        <div className="form-group">
                            <label for="exampleInputPassword1">Update image</label>
                            <input type="file" className="form-control" id="exampleInputPassword1" placeholder="Update photo"/>
                        </div>
    
                        <button type="submit" className="btn btn-primary">Update</button>
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

export default UpdateShare