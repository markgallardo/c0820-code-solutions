import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      isShowing: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isShowing: !this.state.isShowing
    });
  }

  render() {
    if (!this.state.isShowing) {
      return <i onClick={this.handleClick} className='fas fa-bars'></i>;
    } else {
      return (
        <div>
          <nav className='side-drawer'>
            <h1>Menu</h1>
            <ul onClick={this.handleClick}>
              <li><a href="">About</a></li>
              <li><a href="">Get Started</a></li>
              <li><a href="">Sign In</a></li>
            </ul>
          </nav>
          <div onClick={this.handleClick} className='backdrop' >
          </div>
        </div>
      );
    }
  }
}
