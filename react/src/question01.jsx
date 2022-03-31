import React, { Component } from 'react';

class Question01 extends Component {
  constructor(props){
    super(props)
    this.state = {
      timestamp: undefined,
      seconds_wait: 10,
      seconds_timer: 0
    }
    this.timeouts = [];
  }

  componentDidMount() {
    this.setState({ timestamp: Date.now() , seconds_timer: 0});
    this.timeouts.push(setTimeout(this.increaseTimer.bind(this), 1000));
  }

  clearTimeouts() {
    this.timeouts.forEach(clearTimeout);
  }

  componentWillUnmount() {
    this.clearTimeouts();
  }

  increaseTimer(){
    this.setState({seconds_timer: this.state.seconds_timer + 1});
    if(this.state.seconds_timer >= this.state.seconds_wait){
      let old_timestamp = this.state.timestamp
      this.setState({ timestamp: Date.now() , seconds_timer: 0});
      this.props.nextPage([0, this.props.qIndex, -1, old_timestamp])
    } else {
      this.timeouts.push(setTimeout(this.increaseTimer.bind(this), 1000))
    }
  }

  render() {

    return (
      <div className="container">

        <h1>Question {this.props.qIndex + 1} of 18</h1>
        <p>Which scatterplot (<strong>Option A</strong> or <strong>Option B</strong>) has a clearer cluster structure?</p>

        <div className="row justify-content-md-center">
          <div className="col-4 text-center">
            <button type="button" className="btn btn-primary" style={{ width: '200px' }} onClick={() => {
              let old_timestamp = this.state.timestamp
              this.setState({ timestamp: Date.now() , seconds_timer: 0});
              this.props.nextPage([0, this.props.qIndex, this.props.data[this.props.qIndex].imgA, old_timestamp])
            }} >Option A</button>
            <img onClick={() => {
              let old_timestamp = this.state.timestamp
              this.setState({ timestamp: Date.now() , seconds_timer: 0});
              this.props.nextPage([0, this.props.qIndex, this.props.data[this.props.qIndex].imgA, old_timestamp])
            }} className="img-fluid" alt="scatterplot" src={this.props.data[this.props.qIndex].imgA.scatter}/>
          </div>
          <div className="col-4 text-center">
            <button type="button" className="btn btn-primary" style={{ width: '200px' }} onClick={() => {
              let old_timestamp = this.state.timestamp
              this.setState({ timestamp: Date.now() , seconds_timer: 0})
              this.props.nextPage([0, this.props.qIndex, this.props.data[this.props.qIndex].imgB, old_timestamp])
            }} >Option B</button>
            <img onClick={() => {
              let old_timestamp = this.state.timestamp
              this.setState({ timestamp: Date.now() , seconds_timer: 0})
              this.props.nextPage([0, this.props.qIndex, this.props.data[this.props.qIndex].imgB, old_timestamp])
            }} className="img-fluid" alt="scatterplot" src={this.props.data[this.props.qIndex].imgB.scatter}/>
          </div>
        </div>

        <br /><br /><br />

        <div className="row">
          <p className="text-center">{this.state.seconds_timer}/{this.state.seconds_wait} seconds</p>
        </div>

        <div className="row justify-content-md-center">
          <div className="progress col-6">
            <div className="progress-bar" role="progressbar" style={{width: parseInt(100*this.state.seconds_timer/this.state.seconds_wait)+"%"}} aria-valuenow={this.state.seconds_timer} aria-valuemin={0} aria-valuemax={this.state.seconds_wait}></div>
          </div>
        </div>

      </div>);
  }
}

export default Question01;
