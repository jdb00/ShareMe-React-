import React, { Component } from 'react'
import Footer from './footer'
import Header from './header'
import './App.css'
import RouteNewCard from './RouteNewCard'
import API from './API'

class RouteUserPosts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                shares:[
                    {
                        comments:[
                            {

                            }
                        ]
                    }
                ]

            }
        }
    }



    loadUser = () => {
        var {id} = this.props
        API.getUser(id).then(res=>{
            this.setState({user: res.data})
        })
    }

    loadShares = () => {
        API.getShares().then(res => {
            this.setState({shares: res.data})
        })
    }

    componentDidMount(){
        this.loadUser()
    }

    render() {
        var {user} = this.state
        var {currentUser} = this.props
        return (
            <div className="app">
                <div className="usersPosts">
                    <header>
                        <Header currentUser = {currentUser}/>
                    </header>
                    <main>
                        <div className="profimg">
                            <img src={API.serverURL+user.profile_picture} alt="" />
                        </div>
                        <h1 className="user-name">{user.name}</h1>
                        <p>{user.about_me}</p>

                        <div className="user-shares">
                            {this.state.user.shares.map((share) => {
                                var shareProps = {
                                    ...share,
                                    key: 'share' + share.id,
                                    user: this.state.user,
                                    loadShares: this.loadShares,
                                    currentUser: this.props.currentUser
                                    };
                                    if(shareProps.user != null){
                                        return (<RouteNewCard{...shareProps}/>)
                                    }
                            })
                        } 
                        </div>

                    </main>
                    <footer>
                        <Footer />
                    </footer>
                </div>
            </div>
        )
    }
}

export default RouteUserPosts