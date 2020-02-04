import React, { Component } from 'react';
import { bankOne, bankTwo } from '../bankState/bankState.js';
import DrumPad from '../component/DrumPad.js';
export class PadBank extends Component {
  render() {
    let padbank;
    this.props.power
      ? this.props.bank
        ? (padbank = bankOne.map(i => {
            return (
              <DrumPad
                url={i.url}
                id={i.id}
                keyTrigger={i.keyTrigger}
                keyCode={i.keyCode}
                style={Object.assign({}, this.props.bankOneStyle, {
                  color: 'rgb(0,255,200)'
                })}
              />
            );
          }))
        : (padbank = bankTwo.map(i => {
            return (
              <DrumPad
                url={i.url}
                id={i.id}
                keyTrigger={i.keyTrigger}
                keyCode={i.keyCode}
                style={Object.assign({}, this.props.bankTwoStyle, {
                  color: 'rgb(0,200,255)'
                })}
              />
            );
          }))
      : (padbank = bankTwo.map(i => {
          return (
            <DrumPad
              url={i.url}
              id={i.id}
              keyTrigger={i.keyTrigger}
              keyCode={i.keyCode}
              style={this.props.inactiveStyle}
            />
          );
        }));

    return (
      <div id='padbank' style={this.props.themeStyle}>
        {padbank}
      </div>
    );
  }
}
