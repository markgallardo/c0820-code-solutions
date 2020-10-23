import React from 'react';
import ReactDOM from 'react-dom';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isRunning: false
    };
    this.count = this.count.bind(this);
    this.countStart = this.countStart.bind(this);
    this.countPause = this.countPause.bind(this);
  }

  count() {
    this.setState({ time: this.state.time + 1 });
  }

  countStart() {
    this.setState({ isRunning: !this.state.isRunning });
    this.timer = setInterval(
      () => this.count(), 1000
    );
  }

  countPause() {
    this.setState({ isRunning: !this.state.isRunning });
    clearInterval(this.timer);
  }

  render() {
    const icons = this.state.isRunning ? 'fas fa-pause' : 'fas fa-play';
    const controls = this.state.isRunning ? this.countPause : this.countStart;
    return (
      <div>
        <div className={'stopwatch'}>
          <p className={'text'}>{this.state.time}</p>
        </div>
        <div className={'button'}>
          <i className={icons} onClick={controls}></i>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <StopWatch/>,
  document.getElementById('root')
);
