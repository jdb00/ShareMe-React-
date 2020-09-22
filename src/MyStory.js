import React, { Component } from 'react'

class MyStory extends Component {

    render() {
        var { user } = this.props
        return user ? (
            <div className="app">
                <div className="myStory">
                    <h3>My Story:</h3>
                    <p>
                       {user.myStory}
                    </p>
                </div>
            </div>
        ): null
    }
}

export default MyStory