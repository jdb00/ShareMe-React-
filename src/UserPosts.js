import React, { Component } from 'react';
import './App.css';
import NewCard from './NewCard'

class UserPosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shares:[
        {
          id:1,
          title:'Build a hut',
          description: 'Nice project'
        },{
          id:2,
          title:'Make a basket',
          description: 'Pretty project'
        }
      ]
    }
  }

  render() {
    return (
      <div className="app">
        <div className="usersPosts">
          <header>
            <i className="fas fa-chevron-left"></i>
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="user">
              <img src="assets/gettyimages-472015658 2.svg" alt="" />
            </div>
          </header>
          <main>
            <div className="container">
              <div className="user">
                <img src="assets/gettyimages-472015658 2.svg" alt="" />
              </div>
              <h1 className="user-name">Jim Carrey</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corporis laudantium itaque reiciendis vel molestias, harum eaque explicabo maxime magni?</p>

              {
          <NewCard  />
          
        }
            </div>
          </main>
          <footer>
            <i className="fas fa-home"></i>
            <i className="fas fa-plus"></i>
            <i className="fas fa-cog"></i>
          </footer>
        </div>
      </div>
    );
  }
}

export default UserPosts;
