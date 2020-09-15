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
            userShares: [
            ]
        }
    }

    loadUser = (user) => {
        API.getUser(user).then(res => {
            this.setState({userShares: res.data.shares})
        })
    }

    componentDidMount = () => {
        this.loadUser(this.props.user.id)
    }

    render() {
        var {user} = this.props
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
                        <h1 className="user-name">{user.name}</h1>
                        <p>{user.about_me}</p>

                        <div className="user-shares">
                            {this.state.userShares.map((share) => {
                                var shareProps = {
                                    ...share,
                                    user,
                                    loadShare: this.props.loadShare,
                                    key: share.id,
                                };
                                return <RouteNewCard {...shareProps}/>
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