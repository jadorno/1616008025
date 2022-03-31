import React, { Component } from 'react';

class Example06 extends Component {

  render() {
    return (
      <div className="container" style={{ paddingBottom: '75px' }}>

        <h1>Example 2</h1>

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

        <p>You will be shown three scatterplots. Please select the scatterplot (<strong>Option A</strong> or <strong>Option B</strong>) which have similar cluster structure to the reference plot.</p>
        
        <p>The scatterplot with most similar cluster structure to the reference plot is Option B.</p>        

        <div className="row justify-content-md-center">
          <div className="col-4 text-center">
            <button type="button" className="btn btn-primary" style={{ width: '200px' }} disabled>Option A</button>
            <img className="img-fluid" alt="scatterplot" src="img/example06b.png"/>
          </div>
          <div className="col-4">
            <p className="text-center"><strong>Reference</strong></p>
            <img style={{ border: '2px solid #A79AFF' }} className="img-fluid" alt="scatterplot" src="img/example06a.png"/>
          </div>
          <div className="col-4 text-center">
            <button type="button" className="btn btn-primary" style={{ width: '200px' }} disabled>Option B</button>
            <img style={{ border: '2px solid green' }} className="img-fluid" alt="scatterplot" src="img/example06c.png"/>
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

export default Example06;
