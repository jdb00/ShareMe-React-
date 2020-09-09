import React, { Component } from 'react'
import { Link, navigate } from '@reach/router'
import './App.css'

class RouteUpdateShare extends Component {
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
                        <h2>Update share</h2>
                        <div className="logo">
                            <img src="assets/Vector.png" alt="" />
                        </div>
                        <form>
                            <div className="form-group">
                                <label htmlFor="update-title">Update title</label>
                                <input type="text" className="form-control" id="updatetitle" aria-describedby="update-title"
                                    placeholder="Update title of share" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="update-description">Update description</label>
                                <textarea name="comment" defaultValue='Update comment' id="update-description" cols="30" rows="10"></textarea>
                            </div>

                            <div className="form-group">
                                <label htmlFor="update-image">Update image</label>
                                <input type="file" className="form-control" id="update-image" placeholder="Update photo" />
                            </div>

                            <button type="submit" className="btn btn-primary">Update</button>
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

export default RouteUpdateShare