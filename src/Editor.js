import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Editor extends Component {
    constructor(props){
        super(props);
        this.state = {
            calendar: 
                [
                    {
                        date: "",
                        mood: "",
                        message: ""
                    }
                ],
        }
        this.updateDate = this.updateDate.bind(this);
        this.updateMood = this.updateMood.bind(this);
    }

    updateDate(e){
        const value = e.currentTarget.value;
        let copyOfCalendar = this.state.calendar;
        copyOfCalendar[0].date = value;
        this.setState({
            calendar: copyOfCalendar
        })
    }

    updateMood(e){
        let value = "";
        let copyOfCalendar = this.state.calendar;
        this.disableCheck(e.currentTarget);
        if(e.currentTarget.id === "Status__happy"){
            value = "happy";
            copyOfCalendar[0].mood = value;
            return(
                this.setState({
                    calendar: copyOfCalendar
                })
            )
        } else {
            value = "sad";
            copyOfCalendar[0].mood = value;
            return(
                this.setState({
                    calendar: copyOfCalendar
                })
            )
        }
        
    }

    disableCheck(selected){
        const elements = Array.prototype.slice.call(document.getElementsByName('Status__checkbox'));
        elements.map(element =>{
            return(
                element.id === selected.id ? element.checked = true : element.checked = false
            )
        });
    }

    render() {
        console.log(this.state);
        return (
            <div className="Editor">
                <main>
                    <div className="Main Editor__main">
                        <form className="Form Editor__main-form">
                            <div className="Form__sections">
                                <label className="Date">
                                    Date
                                    <input type="text" className="Date" id="Date" value={this.state.calendar[0].date} placeholder="16/04/19" required onChange={this.updateDate}></input>
                                </label>
                                <label className="Status">
                                    How do you feel today?
                                    {/* Insert a onClick function to only be able to select one or change to radio type*/}
                                    <input type="checkbox" name="Status__checkbox" className="Status" id="Status__happy" value={this.state.calendar[0].mood} onChange={this.updateMood}/>:)
                                    <input type="checkbox" name="Status__checkbox" className="Status" id="Status__sad" value={this.state.calendar[0].mood} onChange={this.updateMood}/>:(
                                </label>
                                <label className="Message">
                                    {/* This will only appear if the happy checkbox is selected, must include here a ref and in the happycheckbox a function that toggle a hidden class here */}
                                    Message
                                    <input type="text" className="Message" id="Message" value={this.state.calendar[0].message} onChange={this.updateState}></input>
                                </label>
                            </div>
                            <div className="Form__buttons">
                                    <Link to="/">
                                        <button className="Button Save__button" onClick={()=>this.props.getNewData(this.state)}>Save</button>
                                    </Link>
                                    <Link to="/">
                                        <button className="Button Cancel__button">Cancel</button>
                                    </Link>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        );
    }
}

export default Editor;