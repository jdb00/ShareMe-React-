import React, { Component } from 'react';
import {Link} from '@reach/router'
import axios from 'axios';
import RouteShare from './RouteShare'

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
              image: ''
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
                    <img src="../assets/ShareMe Logo 1.svg" width="200px" height="80px" className="logo" alt="ShareMe Logo"/>
                </div>
                <div className="main">
                    <h3>What you've shared</h3>
                    {
                        this.state.shares.map((share) => {

                        var shareProps = {
                            ...share,
                            key:share.id,
                            setShareToUpdate: this.setShareToUpdate,
                            getshares: this.getshares,
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
