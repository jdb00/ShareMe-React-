import React, { Component } from 'react';
import { Link } from '@reach/router'
import API from './API'
import './App.css'

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: []
        }
    }

    componentDidMount(){
        API.getUser().then(res => this.setState({currentUser:res.data}))
      }

    render() {
        var { user, id, currentUser } = this.props
        return (
            <footer>
                <Link to='/user/posts'><i className="fas fa-home"></i></Link>
                {/* {
                    (currentUser && currentUser.id == user.id ? 
                        <> */}
                            <Link to='/shares/add'><i className="fas fa-plus"></i></Link>
                            <Link to={'/user/settings'}><i className="fas fa-cog"></i></Link>
                        {/* </>
                        : <p>Please log in to use more features</p>)
                } */}
            </footer>
        )
    }
}

export default Footer