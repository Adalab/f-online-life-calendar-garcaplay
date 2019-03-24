import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class Editor extends Component {
    constructor(props){
        super(props);
        this.state = {
            secondCalendar: 
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
        this.transformDate = this.transformDate.bind(this);
        this.updateDate = this.updateDate.bind(this);
        this.updateMood = this.updateMood.bind(this);
        this.updateMessage = this.updateMessage.bind(this);
    }

    transformDate(date){
        let value = date;
        console.log(value);
        const selectedDay = value.getDate();
        const selectedMonth = value.getMonth() + 1; // Months start in 0
        const selectedYear = value.getFullYear();
        value = selectedDay+'-'+selectedMonth+'-'+selectedYear;
        console.log('transformDate value = ' + value);
        this.setState({
            startDate: date,
        }, ()=>this.updateDate(value));
    }

    updateDate(date){
        const value = date;
        let copyOfCalendar = this.state.secondCalendar;
        copyOfCalendar[0].date = value;
        this.setState({
            secondCalendar: copyOfCalendar
        })
    }

    updateMood(e){
        let value = "";
        let copyOfCalendar = this.state.secondCalendar;
        this.disableCheck(e.currentTarget);
        if(e.currentTarget.id === "Status__happy"){
            value = "happy";
            copyOfCalendar[0].mood = value;
            this.showMessageInput();
            return(
                this.setState({
                    secondCalendar: copyOfCalendar
                })
            )
        } else {
            value = "sad";
            copyOfCalendar[0].mood = value;
            this.hideMessageInput();
            return(
                this.setState({
                    secondCalendar: copyOfCalendar
                })
            )
        }
        
    }

    updateMessage(e){
        let value= e.currentTarget.value;
        let copyOfCalendar = this.state.secondCalendar;
        copyOfCalendar[0].message = value;
        this.setState({
            secondCalendar: copyOfCalendar
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
                                        onChange={this.transformDate}
                                        dateFormat="d/MM/yyyy"
                                    />
                                    {/* <input type="text" className="Date" id="Date" value={this.state.calendar[0].date} placeholder="16/04/19" required onChange={this.updateDate}></input> */}
                                </label>
                                <label className="Status">
                                    How do you feel today?
                                    <input type="checkbox" name="Status__checkbox" className="Status" id="Status__happy" value={this.state.secondCalendar[0].mood} onChange={this.updateMood}/>:)
                                    <input type="checkbox" name="Status__checkbox" className="Status" id="Status__sad" value={this.state.secondCalendar[0].mood} onChange={this.updateMood}/>:(
                                </label>
                                <label className="Message Hidden" ref={this.messageInput}>
                                    Message
                                    <input type="text" className="Message" id="Message" value={this.state.secondCalendar[0].message} onChange={this.updateMessage}></input>
                                </label>
                            </div>
                            <div className="Form__buttons">
                                <button className="Button Save__button" onClick={()=>this.props.getNewData(this.state.secondCalendar[0])} type="button">Save</button>
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