import React, { Component } from 'react';

class Example02 extends Component {

  render() {
    return (
      <div className="container" style={{ paddingBottom: '75px' }}>

        <h1>Task Instructions</h1>

        <div className="row justify-content-md-center">
          <div className="col-6">
            <p><b>Cluster</b>: A cluster is a set of data points that are similar and group together. E.g., in the given scatterplot, we can see that similar data points are grouped together.</p>
          </div>
        </div>

        <div className="row justify-content-md-center">
          <div className="col-4">
            <img className="img-fluid" alt="scatterplot" src="img/example03.jpg"/>
          </div>
        </div>

        <br />
        <br />

        <p>This next page will guide you how continue the study. We have two examples to demonstrate, and each one is divided into three parts :</p>
        <ul>
          <li>What is the task?</li>
          <li>Example of the task.</li>
          <li>One trial task.</li>
        </ul>


         <div className="text-center">
          <button type="button" className="btn btn-secondary" style={{ width: '100px' }} onClick={this.props.previousPage}>Back</button>
          <button type="button" className="btn btn-primary" style={{ marginLeft: '10px', width: '100px' }} onClick={this.props.nextPage}>Next</button>
        </div>

      </div>);
  }
}

export default Example02;
