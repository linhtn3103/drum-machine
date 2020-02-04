import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from '../src/store/store';

import {
  changeVolume,
  changePower,
  changeDisplay,
  changeBank
} from '../src/actions/actions.js';
import { Provider, connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    power: state.power,
    volume: state.volume,
    display: state.display,
    bank: state.bank
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changeVolume: newVolume => {
      dispatch(changeVolume(newVolume));
    },
    changePower: currentState => {
      dispatch(changePower(currentState));
    },
    changeDisplay: newDisplay => {
      dispatch(changeDisplay(newDisplay));
    },
    changeBank: currentBank => {
      dispatch(changeBank(currentBank));
    }
  };
};
const Container = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('drum-machine')
);
