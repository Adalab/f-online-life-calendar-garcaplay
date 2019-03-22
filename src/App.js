import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import Editor from './Editor';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            calendar: [],
            // [
            //     {
            //         date: "24/09/19",
            //         mood: "sad",
            //         message: ""
            //     }
            // ],
            noData: ""
        }
    }
    componentDidMount(){
        this.isDataSaved();
    }

    isDataSaved(){
        if(localStorage.getItem('savedMoods') !== null){
            const savedMoods = JSON.parse(localStorage.getItem('savedMoods'));
            this.setState({
                calendar: savedMoods,
                noData: ""
            })
        } else {
            this.setState({
                noData: "Seems like you are new, please click the button above and add your first mood :)"
            })
        }
    }

    getNewData(data){

    }

    saveDataOnLocal(data, dataName){
        localStorage.setItem(dataName, JSON.stringify(data));
    }

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" render={props => (<Home match={props.match} state={this.state}/>)}></Route>
                    <Route path="/editor" render={props => (<Editor match={props.match} state={this.state} getNewData={this.getNewData}/>)}></Route>
                </Switch>
            </div>
        );
    }
}

export default App;
