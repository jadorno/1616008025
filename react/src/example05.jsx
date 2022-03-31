import React, { Component } from 'react';

class Example05 extends Component {
  constructor(props){
    super(props)
    this.state = {
      demo_state : 0,
      demo_msg : undefined
    }
  }

  buttonClick(bool_data){
    if(bool_data){
      this.setState({ demo_state: 1 , demo_msg: "Good job!" });
    } else {
      this.setState({ demo_state: 2 , demo_msg: "Try again" });
    }
  }

  render() {
    return (
      <div className="container" style={{ paddingBottom: '75px' }}>

        <h1>Demo 1</h1>

        <br />

        <div className="row justify-content-md-center text-center" style={{ fontSize: '1.5em' }}>
          <div className="col-4">
            <p>Explanation</p>
          </div>
          <div className="col-4">
            <p><strong>Demo</strong></p>
          </div>
        </div>

        <br />

        <p>Which scatterplot (<strong>Option A</strong> or <strong>Option B</strong>) shows a clearer cluster structure? <br/> You can click the button or the image.</p>

        <div className="row justify-content-md-center">
          <div className="col-4 text-center">
            <button type="button" className="btn btn-primary" style={{ width: '200px' }} onClick={() => { this.buttonClick(1) }}>Option A</button>
            <img onClick={() => { this.buttonClick(1) }} className="img-fluid" alt="scatterplot" src="img/example05a.png"/>
          </div>
          <div className="col-4 text-center">
            <button type="button" className="btn btn-primary" style={{  width: '200px' }} onClick={() => { this.buttonClick(0) }}>Option B</button>
            <img onClick={() => { this.buttonClick(0) }} className="img-fluid" alt="scatterplot" src="img/example05b.png"/>
          </div>
        </div>

        {(this.state.demo_state !== 0) ? (<p className="text-center">{this.state.demo_msg}</p>) : undefined }

         <div className="text-center">
          <button type="button" className="btn btn-secondary" style={{ width: '100px' }} onClick={this.props.previousPage}>Back</button>
          {
            (this.state.demo_state === 1) ? (<button type="button" className="btn btn-primary" style={{ marginLeft: '10px', width: '100px' }} onClick={this.props.nextPage}>Next</button>) : undefined
          }
        </div>

      </div>);
  }
}

export default Example05;
