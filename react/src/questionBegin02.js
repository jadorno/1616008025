import React, { Component } from 'react';

class QuestionBegin02 extends Component {

  render() {
    return (
      <div className="container text-center">
        <p>
          You will now complete 6 tasks based on the following question
          <br />
          "Which scatterplot has a more similar cluster structure to the reference scatterplot?"
        </p>
        <br />
          <button type="button" className="btn btn-secondary" style={{ width: '100px' }} onClick={this.props.previousPage}>Back</button>
          <button type="button" className="btn btn-primary" style={{ marginLeft: '10px', width: '100px' }} onClick={this.props.nextPage}>Next</button>      </div>);
  }
}

export default QuestionBegin02;
