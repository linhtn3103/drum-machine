import React from 'react';

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  render() {
    return {};
  }
}
