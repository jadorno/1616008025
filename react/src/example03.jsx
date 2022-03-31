import React, { Component } from 'react';

class Example03 extends Component {

  render() {
    return (
      <div className="container text-center">
        <h1>STOP</h1>
        <p>Continue to the next page for a new set of instructions.</p>
        <br />
        <p>
          You will now complete 6 tasks based on the following question
          <br />
          "Which scatterplot has a more similar cluster structure to the reference scatterplot?"
        </p>

        <button type="button" className="btn btn-primary" style={{ width: '100px' }} onClick={this.props.nextPage}>Next</button>
      </div>);
  }
}

export default Example03;
