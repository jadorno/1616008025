import React, { Component } from 'react';
import axios from "axios";
import Loading from "./loading"
import Demographics from "./demographics"
import Instructions from "./instructions"
import Introduction from "./introduction"
import Example01 from "./example01"
import Example02 from "./example02"
import Example03 from "./example03"
import Example04 from "./example04"
import Example05 from "./example05"
import Example06 from "./example06"
import Example07 from "./example07"
import QuestionBegin01 from "./questionBegin01"
import QuestionBegin02 from "./questionBegin02"
import Question01 from "./question01"
import Question02 from "./question02"
import Comments from "./comments"
import Submit from "./submit"
import Exit from "./exit"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      config: [],
      page: 0,
      demographics: undefined,
      comments: undefined,
      questions: []
    }
  }

  componentDidMount() {
    axios.get('api/study/config')
      .then((response) => {
        this.setState({ config: response.data, page: this.state.page + 1 });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  previousPage(){
    this.setState({ page: this.state.page - 1 });
  }

  exitPage(){
    this.setState({ page: 33 });
  }

  nextPage2(data) {
    this.setState({ demographics: data, page: this.state.page + 1 });
  }

  nextPage3(data) {
    this.setState({ comments: data, page: this.state.page + 1 });
  }

  nextPage4(data) {
    this.setState({ page: this.state.page + 1 });
  }

  nextPage1(data) {
    let tmpQuestions = this.state.questions;    

    let response = this.state.config[data[1]]
    response.type = data[0]
    response.imgS = undefined
    if(data[2] !== -1){
      response.imgS = data[2]
    }
    response.timestamp1 = data[3]
    response.timestamp2 = Date.now()

    tmpQuestions.push(response)
    this.setState({ questions: tmpQuestions, page: this.state.page + 1 });
  }

  render() {
    switch(this.state.page) {
      case 0: return(<Loading />);
      case 1: return(<Introduction previousPage={ this.exitPage.bind(this) } nextPage={ this.nextPage4.bind(this) } />);
      case 2: return(<Instructions nextPage={ this.nextPage4.bind(this) } />);
      case 3: return(<Example01 previousPage={ this.previousPage.bind(this) } nextPage={ this.nextPage4.bind(this) } />);
      case 4: return(<Example02 previousPage={ this.previousPage.bind(this) } nextPage={ this.nextPage4.bind(this) } />);
      case 5: return(<Example04 previousPage={ this.previousPage.bind(this) } nextPage={ this.nextPage4.bind(this) } />);
      case 6: return(<Example05 previousPage={ this.previousPage.bind(this) } nextPage={ this.nextPage4.bind(this) } />);
      case 7: return(<QuestionBegin01 previousPage={ this.previousPage.bind(this) } nextPage={ this.nextPage4.bind(this) } />);
      case 8: return(<Question01 qIndex={0} data={ this.state.config } nextPage={ this.nextPage1.bind(this) } />);
      case 9: return(<Question01 qIndex={1} data={ this.state.config } nextPage={ this.nextPage1.bind(this) } />);
      case 10: return(<Question01 qIndex={2} data={ this.state.config } nextPage={ this.nextPage1.bind(this) } />);
      case 11: return(<Question01 qIndex={3} data={ this.state.config } nextPage={ this.nextPage1.bind(this) } />);
      case 12: return(<Question01 qIndex={4} data={ this.state.config } nextPage={ this.nextPage1.bind(this) } />);
      case 13: return(<Question01 qIndex={5} data={ this.state.config } nextPage={ this.nextPage1.bind(this) } />);
      case 14: return(<Question01 qIndex={6} data={ this.state.config } nextPage={ this.nextPage1.bind(this) } />);
      case 15: return(<Question01 qIndex={7} data={ this.state.config } nextPage={ this.nextPage1.bind(this) } />);
      case 16: return(<Question01 qIndex={8} data={ this.state.config } nextPage={ this.nextPage1.bind(this) } />);
      case 17: return(<Question01 qIndex={9} data={ this.state.config } nextPage={ this.nextPage1.bind(this) } />);
      case 18: return(<Question01 qIndex={10} data={ this.state.config } nextPage={ this.nextPage1.bind(this) } />);
      case 19: return(<Question01 qIndex={11} data={ this.state.config } nextPage={ this.nextPage1.bind(this) } />);
      case 20: return(<Example03 nextPage={ this.nextPage4.bind(this) } />);
      case 21: return(<Example06 previousPage={ this.previousPage.bind(this) } nextPage={ this.nextPage4.bind(this) } />);
      case 22: return(<Example07 previousPage={ this.previousPage.bind(this) } nextPage={ this.nextPage4.bind(this) } />);
      case 23: return(<QuestionBegin02 previousPage={ this.previousPage.bind(this) } nextPage={ this.nextPage4.bind(this) } />);
      case 24: return(<Question02 qIndex={12} data={ this.state.config } nextPage={ this.nextPage1.bind(this) } />);
      case 25: return(<Question02 qIndex={13} data={ this.state.config } nextPage={ this.nextPage1.bind(this) } />);
      case 26: return(<Question02 qIndex={14} data={ this.state.config } nextPage={ this.nextPage1.bind(this) } />);
      case 27: return(<Question02 qIndex={15} data={ this.state.config } nextPage={ this.nextPage1.bind(this) } />);
      case 28: return(<Question02 qIndex={16} data={ this.state.config } nextPage={ this.nextPage1.bind(this) } />);
      case 29: return(<Question02 qIndex={17} data={ this.state.config } nextPage={ this.nextPage1.bind(this) } />);
      case 30: return(<Demographics nextPage={ this.nextPage2.bind(this) } />);
      case 31: return(<Comments nextPage={ this.nextPage3.bind(this) } />);
      case 32: return(<Submit data={{'demographics': this.state.demographics, 'comments': this.state.comments, 'questions': this.state.questions}} />); 
      case 33: return(<Exit />);
      default: return(<div className="container"><h1>Internal Error</h1></div>);
    }
  }
}

export default App;
