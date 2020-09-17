import React, { Component } from 'react'
import Footer from './footer'
import Header from './header'
import './App.css'
import API from './API'
import RouteNewCard from './RouteNewCard'

class RouteUserPosts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shares: [
                
            ]
        }
    }

    loadShares = () => {
        API.getShares().then(res => {
            this.setState({shares: res.data})

        })
    }

    componentDidMount = () => {
        this.loadShares()
    }

    render() {
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
                        <h1 className="user-name">Jim Carrey</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corporis laudantium itaque reiciendis vel molestias, harum eaque explicabo maxime magni?</p>
                        <h2>User's Posts </h2>
                        
                            <div className="shares">
                            {this.state.shares.map((shares) => {
                                console.log('bla')
                                var sharesProps = {
                                    ...shares,
                                    key: shares.id,
                                    loadShares: this.loadShares
                                    };
                               
                                    return (<RouteNewCard{...sharesProps}/>)
                              
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