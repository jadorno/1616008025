import React, { Component } from 'react';

class Loading extends Component {
  constructor(props){
    super(props)
    this.state = { seconds_timer: 0 }
    this.timeouts = [];
  }

  componentDidMount() {
    this.timeouts.push(setTimeout(this.increaseTimer.bind(this), 1000));
  }

  clearTimeouts() {
    this.timeouts.forEach(clearTimeout);
  }

  componentWillUnmount() {
    this.clearTimeouts();
  }

  increaseTimer(){
    this.setState({seconds_timer: (this.state.seconds_timer + 1) % 4});
    this.timeouts.push(setTimeout(this.increaseTimer.bind(this), 1000))
  }

  render() {
    return (<div className="container"><h1>Loading{Array(this.state.seconds_timer + 1).join(' .')}</h1></div>);
  }
}

export default Loading;
