import React, { Component } from 'react';
import { PadBank } from './component/PadBank';
import './App.css';
var FontAwesome = require('react-fontawesome');
class App extends Component {
  constructor(props) {
    super(props);
    this.handlePower = this.handlePower.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.handleBank = this.handleBank.bind(this);
  }
  handlePower() {
    this.props.changePower(this.props.power);
  }
  handleBank() {
    this.props.changeBank(this.props.bank);
  }
  handleVolume(e) {
    this.props.changeVolume(e.target.value);
  }
  render() {
    let bankOneStyle = {
      textShadow: '0px 0px 5px rgba(0,255,200,1)',
      boxShadow: '0px 0px 5px rgba(0,255,200,1)'
    };
    let bankTwoStyle = {
      textShadow: '0px 0px 5px rgba(0,200,255,1)',
      boxShadow: '0px 0px 5px rgba(0,200,255,1)'
    };
    let inactivedStyle = {
      textShadown: '0px 0px 5px rgba(100,100,100,1)',
      boxShadown: '0px 0px 5px rgba(100,100,100,1)'
    };
    let themeStyle = this.props.power
      ? this.props.bank
        ? bankOneStyle
        : bankTwoStyle
      : inactivedStyle;
    let displayStyle = this.props.power
      ? this.props.bank
        ? {
            background:
              'linear-gradient(90deg, rgba(0,0,0,0), rgba(0,255,200,0.1), rgba(0,0,0,0) )'
          }
        : {
            background:
              'linear-gradient(90deg, rgba(0,0,0,0), rgba(0,200,255,0.1), rgba(0,0,0,0) )'
          }
      : {
          background:
            'linear-gradient(90deg, rgba(0,0,0,0), rgba(100,100,100,0.1), rgba(0,0,0,0) )'
        };
    let bankStyle = this.props.bank
      ? { justifyContent: 'flex-start' }
      : { justifyContent: 'flex-end' };
    let bankSwitchStyle = this.props.power
      ? this.props.bank
        ? { backgroundColor: 'rgb(0,255,200)' }
        : { backgroundColor: 'rgb(0,200,255)' }
      : { backgroundColor: 'rgb(100,100,100)' };
    return (
      <div id='app' style={themeStyle}>
        <div
          id='controls-container'
          // style= {
          //   themeStyle
          //   // {
          //   //   borderRadius: '30px',
          //   //   width: '300px',
          //   //   height: '300px',
          //   //   padding: '10px',
          //   //   display: 'grid',
          //   //   gridGap: '10px'
          //   // })
          // }>
        >
          <div id='header'>
            <FontAwesome
              id='logo'
              name='cogs'
              style={Object.assign({}, themeStyle, { boxShadow: 'none' })}
            />
            <div className='control'>
              <FontAwesome
                id='power-button'
                name='power-off'
                onClick={this.handlePower}
                style={themeStyle}
              />
            </div>
          </div>
          <div
            className='control'
            id='display'
            style={Object.assign(
              {},
              themeStyle,
              { boxShadow: 'none' },
              displayStyle
            )}>
            {this.props.display}
          </div>
          <div
            className='control'
            id='volume-slider'
            style={Object.assign({}, themeStyle, { boxShadow: 'none' })}>
            <div>Volume: </div>
            <input
              className='slider'
              type='range'
              min='0'
              max='1'
              step='0.01'
              value={this.props.volume}
              onChange={this.handleVolume}
              style={themeStyle}></input>
          </div>
          <div className='control' id='bank-select'>
            <div>Bank: </div>
            <div
              id='bank-button'
              onClick={this.handleBank}
              style={Object.assign({}, bankStyle, themeStyle)}>
              <div id='bank-switch' style={bankSwitchStyle}></div>
            </div>
          </div>
        </div>
        <PadBank
          power={this.props.power}
          bank={this.props.bank}
          themeStyle={themeStyle}
          inactivedStyle={inactivedStyle}
          bankOneStyle={bankOneStyle}
          bankTwoStyle={bankTwoStyle}
        />
      </div>
    );
  }
}

export default App;
