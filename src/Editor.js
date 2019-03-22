import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Editor extends Component {
  render() {
    return (
        <div className="Editor">
            <main>
                <div className="Main Editor__main">
                    <form className="Form Editor__main-form">
                        <div className="Form__sections">
                            <label className="Date">
                                Date
                                <input type="text" className="Date" id="Date" value="" placeholder="16/04/19" required></input>
                            </label>
                            <label className="Status">
                                How do you feel today?
                                {/* Insert a onClick function to only be able to select one or change to radio type*/}
                                <input type="checkbox" className="Status" id="Status__happy" value="happy"/>:)
                                <input type="checkbox" className="Status" id="Status__sad" value="sad"/>:(
                            </label>
                            <label className="Message">
                                {/* This will only appear if the happy checkbox is selected, must include here a ref and in the happycheckbox a function that toggle a hidden class here */}
                                Message
                                <input type="text" className="Message" id="Message" value=""></input>
                            </label>
                        </div>
                        <div className="Form__buttons">
                                <Link to="/">
                                    <button className="Button Save__button">Save</button>
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