import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import Editor from './Editor';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            calendar: [
                {
                    date: "24/09/19",
                    mood: "sad"
                }
            ]
        }
    }
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" render={props => (<Home match={props.match} state={this.state}/>)}></Route>
                    <Route path="/editor" render={props => (<Editor match={props.match} state={this.state}/>)}></Route>
                </Switch>
            </div>
        );
    }
}

export default App;
