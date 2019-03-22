import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Happy from './images/happy.png';
import Sad from './images/sad.png';

class Home extends Component {
    componentDidMount(){
        this.props.isDataSaved();
    }
    isHappyOrSad(mood){
        return(
            mood==="happy" ? <img src={Happy} alt="Mood happy" className="Mood__card-img"/> : <img src={Sad} alt="Mood sad" className="Mood__card-img"/>
        )      
    }
    isNewUserOrNot(){
        if(this.props.state.noData !== ""){
            return(
                <p>{this.props.state.noData}</p>
            )
        } else{
            const {state} = this.props;
            const calendar = state.calendar;
            return(
                
                <div className="Main Home__main">
                    <ul className="Mood__list">
                        {calendar.map((day, index)=>{
                            return(
                                <li className="Mood__list-item" key={index}>
                                    <div className="Mood__card">
                                        <p className="Mood__card-day">{day.date}</p>
                                        {this.isHappyOrSad(day.mood)}
                                    </div>
                                </li>
                            )
                        })}
                    
                    </ul>
                </div>
                
            ) 
        }
    }
  render() {  
    return (
      <div className="Home">
        <header>
          <div className="Header Home__header">
            <Link to="/editor">
                <button className="Button Home__header-button">+</button>
            </Link>
          </div>
        </header>
        <main>
            {this.isNewUserOrNot()}
        </main>
      </div>
    );
  }
}

export default Home;