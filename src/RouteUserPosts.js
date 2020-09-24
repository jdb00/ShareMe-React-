import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import './App.css'
import RouteNewCard from './ShareCard'
import API from './API'
import { Spring } from 'react-spring/renderprops'

class RouteUserPosts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                profile_picture: '1600664160374default-user.png',
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
            <Spring
                from={{opacity:0}}
                to={{opacity:1}}
            >
                {props => (
                    <div className="app" style={props}>
                        <div className="users-posts">
                            <header>
                                <Header currentUser = {currentUser}/>
                            </header>
                            <main>
                                <div className="prof-img">
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

                                        return null
                                    })} 
                                </div>

                            </main>
                            <footer>
                                <Footer />
                            </footer>
                        </div>
                    </div>
                )}
            </Spring>
        )
    }
}

export default RouteUserPosts