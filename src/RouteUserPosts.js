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

    loadUser = (currentUser) => {
        API.getUser(currentUser).then(res => {
            console.log(res)
            this.setState({userShares: res.data.shares})
        })
    }

    componentDidMount = () => {
        this.loadUser(this.props.currentUser.id)
    }

    render() {
        var {currentUser} = this.props
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
                        <h1 className="user-name">{currentUser.name}</h1>
                        <p>{currentUser.about_me}</p>

                        <div className="user-shares">
                            {this.state.userShares.map((share) => {
                                var shareProps = {
                                    ...share,
                                    currentUser,
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