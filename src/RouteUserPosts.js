import React, { Component } from 'react'
import Footer from './footer'
import Header from './header'
import NewCard from './NewCard'
import { navigate} from '@reach/router'
import API from './API'
import './App.css'

class RouteUserPosts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shares:[],
            currentUser: null
          }
    }

    setCurrentUser = (user) => {
        this.setState({currentUser:user})
      }
      handleLogoutClick = (e) => {
        e.preventDefault()
        localStorage.removeItem('userId')
        this.setState({currentUser:null})
        navigate('/users/authenticate')
      }

    componentDidMount(){
        API.getShares().then(res => this.setState({shares:res.data}))
    
        //local storage
        var userId = localStorage.getItem('userId')
        if(userId){
          API.getSingleUser(userId).then(res => this.setState({currentUser:res.data}))
        }
      }

    render() {
        var {shares, currentUser} = this.state
        return (
            <div className="app">
                <div className="usersPosts">
                    <header>
                        <Header />
                    </header>
                    <main>
                        <div className="profimg">
                            <img src="../assets/gettyimages-472015658 2.svg" alt="" />
                        </div>
                        {
                            currentUser ? (<h1>Welcome <br/>{currentUser.name}</h1>) : null
                        }
                    </main>
                    <NewCard />
                    <footer>
                        <Footer />
                    </footer>
                </div>
            </div>
        )
    }
}

export default RouteUserPosts