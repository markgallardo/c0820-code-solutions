import React from 'react';
import ReactDom from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isClicked: !state.isClicked
    }));
  }

  render() {
    return (
      <button onClick ={this.handleClick}>{this.state.isClicked ? 'thanks' : 'Click Me!'}</button>
    );
  }
}

ReactDom.render(
  <CustomButton/>,
  document.getElementById('root')
);
