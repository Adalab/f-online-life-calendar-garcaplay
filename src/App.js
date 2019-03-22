import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import { createHashHistory } from 'history';
import Home from './Home';
import Editor from './Editor';

export const history = createHashHistory();

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
        this.isDataSaved = this.isDataSaved.bind(this);
        this.getNewData = this.getNewData.bind(this);
        this.saveDataOnLocal = this.saveDataOnLocal.bind(this);
        this.returnToHome = this.returnToHome.bind(this);
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
                noData: 'Seems like you are new, please click the button above and add your first mood :)'
            })
        }
    }

    getNewData(data){
        let value = data.calendar[0];
        this.setState({
            calendar: [...this.state.calendar, value]
        }, ()=>this.saveDataOnLocal(this.state.calendar, 'savedMoods'))
        
    }

    saveDataOnLocal(data, dataName){
        console.log(data)
        localStorage.setItem(dataName, JSON.stringify(data));
        this.returnToHome();
    }

    returnToHome(){
        history.push('/');
    }

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" render={props => (<Home match={props.match} state={this.state} isDataSaved={this.isDataSaved}/>)}></Route>
                    <Route path="/editor" render={props => (<Editor match={props.match} state={this.state} getNewData={this.getNewData}/>)}></Route>
                </Switch>
            </div>
        );
    }
}

export default App;
