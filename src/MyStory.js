import React, { Component } from 'react'
import API from './API'

class MyStory extends Component {

    render() {
        var { user } = this.props
        return user ? (
            <div className="app">
                <div className="myStory">
                    <h3>Add your Story</h3>
                    <p>
                       {user.myStory}
                    </p>
                </div>
            </div>
        ): <p>You have not added your st</p>
    }
}

export default MyStory