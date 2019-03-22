import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import Editor from './Editor';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/editor" component={Editor}></Route>
                </Switch>
            </div>
        );
    }
}

export default App;
