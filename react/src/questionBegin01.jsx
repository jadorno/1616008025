import React, { Component } from 'react';

class Example03 extends Component {

  render() {
    return (
      <div className="container text-center">
      	<h1>The experiment will now begin.</h1>
        <p>
          You will now complete 12 tasks based on the following question
          <br />
          "Which scatterplot has a clearer cluster structure?"
        </p>
        <br />

         <div className="text-center">
          <button type="button" className="btn btn-secondary" style={{ width: '100px' }} onClick={this.props.previousPage}>Back</button>
          <button type="button" className="btn btn-primary" style={{ marginLeft: '10px', width: '100px' }} onClick={this.props.nextPage}>Next</button>
        </div>

      </div>);
  }
}

export default Example03;
