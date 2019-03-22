import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Happy from './images/happy.png';
import Sad from './images/sad.png';

class Home extends Component {
    isHappyOrSad(mood){
        return(
            mood==="happy" ? <img src={Happy} alt="Mood happy" className="Mood__card-img"/> : <img src={Sad} alt="Mood sad" className="Mood__card-img"/>
        )      
    }
  render() {
      const {state} = this.props;
      const calendar = state.calendar;
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
        </main>
      </div>
    );
  }
}

export default Home;