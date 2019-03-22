import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Editor from './Editor';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Home></Home>
                <Editor></Editor>
            </div>
        );
    }
}

export default App;
