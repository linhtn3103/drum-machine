import React, { Component } from 'react';
import { PadBank } from './component/PadBank';
import './App.css';
var FontAwesome = require('react-fontawesome');
class App extends Component {
  render() {
    return (
      <div id='app'>
        <div id='control-containner'>
          <div id='header'>
            <FontAwesome name='cogs' />
            <div className='control'>
              <FontAwesome name='power-off' />
            </div>
          </div>
          <div className='control' id='display'>
            Chord
          </div>
          <div className='control' id='volume-slider'>
            <div>Volume: </div>
            <input type='range' min='0' max='1' step='0.01'></input>
          </div>
          <div className='control' id='bank-select'>
            <div>Bank: </div>
            <div id='bank-button'>
              <div id='bank-switch'></div>
            </div>
          </div>
        </div>
        <PadBank />
      </div>
    );
  }
}

export default App;
