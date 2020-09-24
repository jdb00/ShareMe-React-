import React, { Component } from 'react'
import {navigate } from '@reach/router'
import Footer from './Footer'
import Header from './Header'
import './App.css'
import API from './API'

class RouteUpdateShare extends Component {
    constructor(props) {
        super(props)
        this.state = {
            share:{
                //title: 
                //description:
                //image:
            }
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        var formData = new FormData(this.addForm)

        if(formData.get('update-image').size > 0){
            API.uploadFile(formData)
            .then(res => res.data)
            .then(fileName => {
                var data = {
                    title: formData.get('title'),
                    description: formData.get('description'),
                    image: fileName,
                    type_id: formData.get('type-input')
                  }
                API.updateShare(this.props.id,data).then(res => navigate('/shares/'))

            })
        }else{
            var data = {
                title: formData.get('title'),
                description: formData.get('description'),
                image: this.state.share.image,
                type_id: formData.get('type-input')
              }
            API.updateShare(this.props.id,data).then(res => navigate('/shares/'))
        }
        
        
    }

    loadShare = () => {
        var {id} = this.props
   
        API.getShare(id).then(res => {
            this.setState({share: res.data})
        })
    }

    componentDidMount(){
        this.loadShare()
    }

    render() {
        var {title, description, image, user} = this.state.share
        return (
            <div className="app">
                <div className="add-update-share">
                    <header>
                        <Header currentUser={user}/>
                    </header>
                    <main>
                        <h2>Update share</h2>
                        <div className="logo">
                            <img src="assets/Vector.png" alt="" />
                        </div>
                        <form onSubmit={this.handleFormSubmit} ref={(el) => {this.addForm = el}}>
                            <div className="form-group" >
                                <label htmlFor="update-title">Update title</label>
                                <input type="text" className="form-control" id="title" name='title' aria-describedby="update-title"
                                    defaultValue={title}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="update-description">Update description</label>
                                <textarea id="description" name="description" cols="30" rows="10" defaultValue={description}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="update-image">Update image</label>
                                <input type="file" className="form-control" id="update-image" name="update-image" placeholder={image} />
                            </div>

                            <button type="submit" className="btn btn-primary">Update</button>
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

export default RouteUpdateShare