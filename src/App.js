import React, { Component } from 'react';
import logo from './sharemelogo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="app">
                <div className="splashPage">
                    <header>

                    </header>
                    <main>
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="signin-signup">
                            <button type="submit" class="btn btn-primary">Sign in</button>
                            <button type="submit" class="btn btn-primary">Sign up</button>
                        </div>
                    </main>
                    <footer>

                    </footer>
                </div>
            </div>
        );
    }
}

export default App;
