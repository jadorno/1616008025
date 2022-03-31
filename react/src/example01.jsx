import React, { Component } from 'react';

class Example01 extends Component {

  render() {
    return (
      <div className="container" style={{ paddingBottom: '75px' }}>

        <h1>Task Instructions</h1>

        <p>Please read carefully to the following instructions before you move on next and continue the study.</p>

        <div className="row justify-content-md-center">
          <div className="col-6">
            <p><b>Scatterplot</b>: A scatterplot is a graph that displays values for two variables for a set of data. E.g., in this given scatterplot two variable (let say X and Y ) are plotted.</p>
          </div>
        </div>

        <div className="row justify-content-md-center">
          <div className="col-4">
            <img className="img-fluid" alt="scatterplot" src="img/example02.jpg"/>
          </div>
        </div>


        <br />
        <br />

         <div className="text-center">
          <button type="button" className="btn btn-secondary" style={{ width: '100px' }} onClick={this.props.previousPage}>Back</button>
          <button type="button" className="btn btn-primary" style={{ marginLeft: '10px', width: '100px' }} onClick={this.props.nextPage}>Next</button>
        </div>

      </div>);
  }
}

export default Example01;
