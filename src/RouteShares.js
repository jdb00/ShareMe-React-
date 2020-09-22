import React, { Component } from 'react';
import {Router, Link, navigate} from '@reach/router'
import API from './API'
import axios from 'axios';
import RouteSplashPage from './RouteSplash'
import RouteLogIn from './RouteLogIn'
import RouteSignUp from './RouteSignUp'
import RouteAddShare from './RouteAddShare'
import RouteUpdateShare from './RouteUpdateShare'
import RouteNavigation from './RouteNavigation'
import RouteShare from './RouteShare'
import userEvent from '@testing-library/user-event';

var urlPrefix = 'http://localhost:4020/api'

class RouteShares extends Component {

    constructor(props){
        super(props)
    
        this.state = {
          shares:[
            {
              id:'',
              title:'Name',
              description: 'Description',
              image: 'photo.jpg'
            }],
        }
      }

      getshares = () => {
        axios.get(urlPrefix+'/shares')
        .then (res => {
          this.setState({shares:res.data})
        })
      }
      setShareToUpdate = (id) => {
        var foundshare = this.state.shares.find((share) =>{
          return share.id === id
        })
        this.setState({shareToUpdate:foundshare})
      }
      componentDidMount(){
        this.getshares()
      }

    render() {

        var {currentUser} = this.props 
        return (
            <div className="app">
                <div className="header">
                    <Link to="../nav"><i className="fas fa-bars"></i></Link>
                    {currentUser ? <label className="welcome">Welcome, {currentUser.name}</label> : null}
                    <img src="../assets/ShareMe Logo 1.svg" width="200px" height="80px" className="logo"/>
                </div>
                <div className="main">
                    <h3>What you've shared</h3>
                    {
                        this.state.shares.map((share) => {

                        var shareProps = {
                            ...share,
                            setShareToUpdate: this.setShareToUpdate,
                            getshares: this.getshares,
                            setShareToUpdate: this.setShareToUpdate,
                        }
                        return (<RouteShare {...shareProps} />)
                        })
                    }
                </div>
            </div>
        );
    }
}

export default RouteShares;
