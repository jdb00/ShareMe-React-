import React, { Component } from 'react';
import {Link} from '@reach/router'
import './App.css';
import { Spring } from 'react-spring/renderprops'

class RouteSplashPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        return (
            <Spring
                from={{opacity: 0}}
                to= {{opacity: 1}}
            >
                {props=>(
                    <div className="app" style={props}>
                        <div className="splash-page">
                            <header>

                            </header>
                            <main>
                                <div className="logo">
                                    <img src='../assets/ShareMe Logo 1.svg' alt="" />
                                </div>
                                <div className="sign-in-sign-up">
                                    <button type="submit" className="btn btn-primary"><Link to='/users/authenticate'>Sign in</Link></button>
                                    <button type="submit" className="btn btn-primary"><Link to='/users/create'>Sign up</Link></button>
                                </div>
                            </main>
                            <footer>

                            </footer>
                        </div>
                    </div>
                )}
            </Spring>
        );
    }
}

export default RouteSplashPage;
