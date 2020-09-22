import React, { Component } from 'react'
import { Link, navigate } from '@reach/router'
import Footer from './footer'
import Header from './header'
import './App.css'
import API from './API'

class RouteUpdateShare extends Component {
    constructor(props) {
        super(props)
        this.state = {
            share:{}
        }
    }

    componentDidMount(){
        var {id} = this.props;
        API.getShare(id).then(res => {
            console.log(res.data)
          this.setState({share:res.data})
        })
      }


    handleFormSubmit = (e) => {
        e.preventDefault()
       
        var formData = new FormData(this.updateForm)
        var data = {
          title: formData.get('title'),
          description: formData.get('description'),
          image: formData.get('pics')
        }

       
        var {id} = this.props;
        API.updateShares(id,data).then(res => navigate('/user/posts'))

    }

    
    render() {
        
        var {title,description} = this.state.share
        return (
            <div className="app">
                <div className="addUpdateShare">
                    <header>
                        <Header />
                    </header>
                    <main>
                        <h2>Update share</h2>
                        <div className="logo">
                            <img src="assets/Vector.png" alt="" />
                        </div>
                        <form onSubmit={this.handleFormSubmit} ref={(el) => {this.updateForm = el}}>
                            <div className="form-group">
                                <label htmlFor="update-title">Update title</label>
                                <input type="text" className="form-control" name="title" id="updatetitle" aria-describedby="update-title"
                                    placeholder="Update title of share" defaultValue={title}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="update-description">Update description</label>
                                <textarea defaultValue={description} name='description' id="update-description" cols="30" rows="10" placeholder='Update comment'></textarea>
                            </div>

                            <div className="form-group">
                                <label htmlFor="update-image">Update image</label>
                                <input type="text" className="form-control" id="update-image" placeholder="Update photo" />
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