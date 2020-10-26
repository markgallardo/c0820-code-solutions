import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: event.target.value });
  }

  render() {
    const password = this.state.value;
    let message;
    let icon;
    if (password.length === 0) {
      message = <p className="textRed">Password is required</p>;
      icon = <i className="fas fa-times"></i>;
    } else if (password.length < 8) {
      message = <p className="textRed">Password to short</p>;
      icon = <i className="fas fa-times"></i>;
    } else {
      icon = <i className="fas fa-check"></i>;
    }

    return (
      <form>
        <div>
          <label htmlFor="password">Password</label>
        </div>
        <input type="password" value={this.state.value} onChange={this.handleChange}/>
        {icon}
        <div>
          {message}
        </div>
      </form>
    );

  }
}
