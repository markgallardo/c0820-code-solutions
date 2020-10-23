import React from 'react';

export default class ToggleSwitct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isToggle: !this.state.isToggle });
  }

  render() {
    const toggle = this.state.isToggle;
    return (
      <div>
        <div onClick={this.handleClick} className={toggle ? 'switchOn' : 'switchOff'}>
          <div className={toggle ? 'sliderOn' : 'sliderOff'}>
          </div>
        </div>
        <h1>{toggle ? 'ON' : 'OFF'}</h1>
      </div>
    );
  }
}
