import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCounter: 0
    };
    this.handleCLick = this.handleCLick.bind(this);
  }

  handleCLick() {
    this.setState(state => ({
      clickCounter: state.clickCounter + 1
    }));
  }

  render() {
    const counter = this.state.clickCounter;
    // eslint-disable-next-line no-console
    console.log(counter);
    let color = '';

    if (counter < 3) {
      color = 'blue';
    } else if (counter >= 3 && counter < 6) {
      color = 'darkpurple';

    } else if (counter >= 6 && counter < 9) {
      color = 'lightpurple';

    } else if (counter >= 9 && counter < 12) {
      color = 'red';

    } else if (counter >= 12 && counter < 15) {
      color = 'orange';

    } else if (counter >= 15 && counter < 18) {
      color = 'yellow';

    } else if (counter >= 18) {
      color = 'white';

    }
    // eslint-disable-next-line no-console
    console.log(color);
    return (
      <button className={color} onClick={this.handleCLick}> {color}</button>
    );
  }
}
