import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

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
            startDate: new Date()
        }
        this.messageInput = React.createRef();
        this.updateDate = this.updateDate.bind(this);
        this.updateMood = this.updateMood.bind(this);
        this.updateMessage = this.updateMessage.bind(this);
    }

    updateDate(date){
        console.log(date);
        const value = date;
        let copyOfCalendar = this.state.calendar;
        copyOfCalendar[0].date = value;
        this.setState({
            calendar: copyOfCalendar,
            startDate: value,
        })
    }

    updateMood(e){
        let value = "";
        let copyOfCalendar = this.state.calendar;
        this.disableCheck(e.currentTarget);
        if(e.currentTarget.id === "Status__happy"){
            value = "happy";
            copyOfCalendar[0].mood = value;
            this.showMessageInput();
            return(
                this.setState({
                    calendar: copyOfCalendar
                })
            )
        } else {
            value = "sad";
            copyOfCalendar[0].mood = value;
            this.hideMessageInput();
            return(
                this.setState({
                    calendar: copyOfCalendar
                })
            )
        }
        
    }

    updateMessage(e){
        let value= e.currentTarget.value;
        let copyOfCalendar = this.state.calendar;
        copyOfCalendar[0].message = value;
        this.setState({
            calendar: copyOfCalendar
        })
    }

    disableCheck(selected){
        const elements = Array.prototype.slice.call(document.getElementsByName('Status__checkbox'));
        elements.map(element =>{
            return(
                element.id === selected.id ? element.checked = true : element.checked = false
            )
        });
    }

    showMessageInput(){
        this.messageInput.current.classList.remove("Hidden");
    }

    hideMessageInput(){
        this.messageInput.current.classList.add("Hidden");
    }

    render() {
        return (
            <div className="Editor">
                <main>
                    <div className="Main Editor__main">
                        <form className="Form Editor__main-form">
                            <div className="Form__sections">
                                <label className="Date">
                                    Date
                                    <DatePicker 
                                        selected={this.state.startDate}
                                        onChange={this.updateDate}
                                        dateFormat="d/MM/yyyy"
                                    />
                                    {/* <input type="text" className="Date" id="Date" value={this.state.calendar[0].date} placeholder="16/04/19" required onChange={this.updateDate}></input> */}
                                </label>
                                <label className="Status">
                                    How do you feel today?
                                    <input type="checkbox" name="Status__checkbox" className="Status" id="Status__happy" value={this.state.calendar[0].mood} onChange={this.updateMood}/>:)
                                    <input type="checkbox" name="Status__checkbox" className="Status" id="Status__sad" value={this.state.calendar[0].mood} onChange={this.updateMood}/>:(
                                </label>
                                <label className="Message Hidden" ref={this.messageInput}>
                                    Message
                                    <input type="text" className="Message" id="Message" value={this.state.calendar[0].message} onChange={this.updateMessage}></input>
                                </label>
                            </div>
                            <div className="Form__buttons">
                                <button className="Button Save__button" onClick={()=>this.props.getNewData(this.state)} type="button">Save</button>
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