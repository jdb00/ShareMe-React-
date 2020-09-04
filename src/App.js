import React, { Component } from 'react';
import logo from './sharemelogo.svg';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="app">
        <header>
            <i className="fas fa-chevron-left"></i>
            <img src={logo} alt=""/>
            <div className="user">
                <img src="" alt=""/>
            </div>
        </header>
        <main>
            <div className="container">

            </div>
        </main>
        <footer>
            <i className="fas fa-home"></i>
            <i className="fas fa-plus"></i>
            <i className="fas fa-cog"></i>
        </footer>
      </div> 
    );
  }
}

export default App;
