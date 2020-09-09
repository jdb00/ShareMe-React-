import React, { Component } from 'react'
import { Link, navigate } from '@reach/router'
import './App.css'

class RouteAddShare extends Component {
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
                            <img src="../assets/ShareMe Logo 1.svg" alt="" />
                        </div>
                        <div className="profimg">
                            <img src="../assets/gettyimages-472015658 2.svg" alt="" />
                        </div>
                    </header>
                    <main>
                        <h2>Add share</h2>
                        <div className="logo">
                            <img src="../assets/Vector.png" alt="" />
                        </div>
                        <form>
                            <div className="form-group">
                                <label htmlFor="title">Title of your share</label>
                                <input type="text" className="form-control" id="title" aria-describedby="title" placeholder="Enter the title of the share" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="comment">Description of your share</label>
                                <textarea name="comment" id="" cols="30" rows="10">Enter a comment</textarea>
                            </div>

                            <div className="form-group">
                                <label htmlFor="pics">Add your image</label>
                                <input type="file" className="form-control" id="pics" placeholder="Add a photo" />
                            </div>

                            <button type="submit" className="btn btn-primary">Add</button>
                        </form>
                    </main>
                    <footer>
                        <Link to='/user/posts'><i className="fas fa-home"></i></Link>
                        <Link to='/shares/add'><i className="fas fa-plus"></i></Link>
                        <Link to='/user/settings'><i className="fas fa-cog"></i></Link>
                    </footer>
                </div>
            </div>
        )
    }
}

export default RouteAddShare