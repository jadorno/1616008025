import React, { Component } from 'react';
import axios from "axios";

class Submit extends Component {
  constructor(props){
    super(props)
    this.state = {
      status: 0,
      id: undefined
    }
  }

  componentDidMount() {
    let submit_data = {
      questions: this.props.data.questions,
      demographics: this.props.data.demographics,
      comments: this.props.data.comments
    }
    axios.post('api/study/submit', submit_data)
      .then((response) => {
        if(response.status === 200){
          this.setState({ status: 1, id: response.data.id });
        } else {
          console.log(response)
          this.setState({ status: 2 });
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({ status: 2 });
      });
  }

  render() {

    let status_message = "Please wait. Uploading Responses."
    if(this.state.status === 1){
      status_message = "Confirmation Number: "+this.state.id
    } else if(this.state.status === 1){
      status_message = "An error has occurred uploading your submission."
    }

    return (
      <div className="container">
        <h1>{status_message}</h1>
        <p>Enter this confirmation number in the <u>Amazon Mechanical Turk submission</u>. Please note that if you don&#39;t submit the correct number, we won&#39;t be able to pay you.</p>
      </div>);
  }
}

export default Submit;