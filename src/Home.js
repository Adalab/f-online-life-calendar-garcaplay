import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
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
          <div className="Main Home__main">
            <ul className="Mood__list">
              <li className="Mood__list-item">
                <div className="Mood__card">
                  <img src="" alt="Mood" className="Mood__card-img"/>
                </div>
              </li>
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;