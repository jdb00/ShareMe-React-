import React, { Component } from 'react';
import { Router, Link, navigate} from '@reach/router'
import './App.css';

import RouteSplashPage from './RouteSplashPage'
import RouteLogIn from './RouteLogIn'
import RouteSignUp from './RouteSignUp'
import RouteAddShare from './RouteAddShare'
import RouteNewShare from './RouteNewShare'
import RouteUpdateShare from './RouteUpdateShare'
import RouteUserPosts from './RouteUserPosts'
import RouteSettings from './RouteSettings'
import RouteShareModal from './RouteShareModal';


class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeView:'shares',
            projects:[
              {
                id:1,
                title:'Hello123',
                user: 'john01'
              },{
                id:2,
                title:'Hi123',
                user: 'amy01'
              }
            ],
            sharesToUpdate:{
              id:2,
              title:'Hi123',
              user: 'amy01',
            }
          }
    }

    
    
 

    render() {
        return (
            <div className="app">
                <Router>
                    <RouteSplashPage path="splash"/>
                    <RouteLogIn  path="users/authenticate"/>
                    <RouteSignUp path="users/create"/>
                    <RouteSettings path="user/settings"/>
                    <RouteUserPosts path="user/posts"/>
                    <RouteAddShare path="shares/add"/>
                    <RouteNewShare path="shares"/>
                    <RouteUpdateShare path="shares/:id/update"/>
                    <RouteShareModal path="feed/share/:id"/>
                </Router>
            </div>
        )
    }
}

export default App;
