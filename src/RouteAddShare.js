import React, { Component } from 'react';
import { navigate } from '@reach/router'
import Footer from './footer'
import Header from './header'
import API from './API'


class RouteAddShare extends Component {
    constructor(props) {
        super(props)
    }

    handleFormSubmit = (e) => {
        e.preventDefault()

        var formData = new FormData(this.form)

        API.uploadFile(formData)
            .then(res => res.data)

            .then(fileName => {
                var { currentUser } = this.props;
                var data = {
                    title: formData.get('title-input'),
                    share: formData.get('share-input'),
                    photo: fileName,
                    user_id: currentUser.id
                }
                API.addShares(data).then(res => navigate('/user/posts'))

            })

    }

    render() {
        return (
            <div className="app">
                <div className="addUpdateShare">
                    <header>
                        <Header />
                    </header>
                    <main>
                        <h2>Add share</h2>
                        <div className="logo">
                            <img src="../assets/Vector.png" alt="" />
                        </div>
                        <form onSubmit={this.handleFormSubmit} ref={(el) => { this.addForm = el }}>
                            <div className="form-group">
                                <label htmlFor="title-input">Title of your share</label>
                                <input type="text" defaultValue='' className="form-control" name="title-input" id="title-input" placeholder='Enter the title of the share' />
                            </div>

                            <div className="form-group">
                                <label htmlFor="share-input">Description of your share</label>
                                <input type="text" defaultValue='' className="form-control" name="share-input" id="share-input" placeholder='Enter your description' cols="30" rows="10" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="photo-input">Add your image</label>
                                <input type="file" className="form-control" name="photo-input" id="photo-input" placeholder="Add an image" />
                            </div>

                            <button type="submit" className="btn btn-primary">Add</button>
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

export default RouteAddShare