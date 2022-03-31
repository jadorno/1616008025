import React, { Component } from 'react';

class Example04 extends Component {

  render() {
    return (
      <div className="container" style={{ paddingBottom: '75px' }}>

        <h1>Example 1</h1>

        <br />

        <div className="row justify-content-md-center text-center" style={{ fontSize: '1.5em' }}>
          <div className="col-4">
            <p><strong>Explanation</strong></p>
          </div>
          <div className="col-4">
            <p>Demo</p>
          </div>
        </div>

        <br />

        <p>You will be shown two scatterplots. Please identify and select the scatterplot (<strong>Option A</strong> or <strong>Option B</strong>) with a clearer cluster structure.</p>

        <p>A clearer cluster structure the scatterplot is shown in a green box.</p>

        <div className="row justify-content-md-center">
          <div className="col-4 text-center">
            <button type="button" className="btn btn-primary" style={{ width: '200px' }} disabled>Option A</button>
            <img className="img-fluid" alt="scatterplot" src="img/example04a.png"/>
          </div>
          <div className="col-4 text-center">
            <button type="button" className="btn btn-primary" style={{ width: '200px' }} disabled>Option B</button>
            <img className="img-fluid" alt="scatterplot" src="img/example04b.png"/>
          </div>
        </div>

        <br />

         <div className="text-center">
          <button type="button" className="btn btn-secondary" style={{ width: '100px' }} onClick={this.props.previousPage}>Back</button>
          <button type="button" className="btn btn-primary" style={{ marginLeft: '10px', width: '100px' }} onClick={this.props.nextPage}>Next</button>
        </div>

      </div>);
  }
}

export default Example04;
