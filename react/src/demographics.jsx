import React, { Component } from 'react';

class Demographics extends Component {
  constructor(props){
    super(props)
    this.state = {
      age: undefined,
      gender: undefined,
      gender_text: undefined,
      corrected_vision: undefined,
      visualization_experience: undefined
    }

  }

  handleChange(event) {
    switch(event.target.name) {
      case 'age':
        this.setState({ age: event.target.value });
        break;
      case 'gender':
        this.setState({ gender: event.target.value });
        break;
      case 'gender_text':
        this.setState({ gender_text: event.target.value });
        break;
      case 'corrected_vision':
        this.setState({ corrected_vision: event.target.value });
        break;
      case 'visualization_experience':
        this.setState({ visualization_experience: event.target.value });
        break;
      default:
        console.log('Error Updating '+event.target.name)
      }
  }

  render() {

    let gender_textarea = []
    if(this.state.gender === 'gender_text'){
      gender_textarea.push(
        <div>
        <br /><br />
        <div className="form-group">
          <label htmlFor="gender_text">Gender Self-Identification</label>
          <input type="text" className="form-control" name="gender_text" id="gender_text" placeholder="enter gender 🏳️‍🌈" value={this.state.gender_text} onChange={this.handleChange.bind(this)}/>
        </div>
        </div>
      )
    }


    return (
      <div className="container">

        <h1>Participant Demographics</h1>

        <p>Please answer the following questions.</p>


        <label htmlFor="age">What is your age?</label>
        <br />
        <select className="form-control" name="age" id="age" value={this.state.age} onChange={this.handleChange.bind(this)}>
          <option value="age_null"></option>
          <option value="age_01">under 18 years</option>
          <option value="age_02">18-24 years</option>
          <option value="age_03">25-34 years</option>
          <option value="age_04">35-44 years</option>
          <option value="age_05">45-54 years</option>
          <option value="age_06">55-64 years</option>
          <option value="age_07">65+ years</option>
        </select>

        <br /><br />

        <label htmlFor="gender">What is your gender?</label>
        <br />
        <select className="form-control" name="gender" id="gender" value={this.state.gender} onChange={this.handleChange.bind(this)}>
          <option value="gender_null"></option>
          <option value="gender_m">Man</option>
          <option value="gender_w">Woman</option>
          <option value="gender_x">Nonbinary or Genderqueer</option>
          <option value="gender_text">Prefer to self identify</option>
          <option value="gender_no">Prefer not to say</option>
        </select>

        {gender_textarea}

        <br /><br />

        <label htmlFor="corrected_vision">Do you have corrected vision? (glasses or contact lenses)</label>
        <br />
        <select className="form-control" name="corrected_vision" id="corrected_vision" value={this.state.corrected_vision} onChange={this.handleChange.bind(this)}>
          <option value="corrected_null"></option>
          <option value="corrected_y">Yes</option>
          <option value="corrected_n">No</option>
        </select>

        <br /><br />

        <label htmlFor="visualization_experience">How much experience do you have creating or using data visualizations?</label>
        <br />
        <select className="form-control" name="visualization_experience" id="visualization_experience" value={this.state.visualization_experience} onChange={this.handleChange.bind(this)}>
          <option value="experience_null"></option>
          <option value="experience_01">No Experience</option>
          <option value="experience_02">Little Experience</option>
          <option value="experience_03">Some Experience</option>
          <option value="experience_04">Casual Experience</option>
          <option value="experience_05">Extensive Experience</option>
        </select>

        <br /><br />
         <div className="text-center">
          <button type="button" className="btn btn-primary" style={{ width: '100px' }} onClick={() => {this.props.nextPage(this.state)}}>Next</button>


        </div>

      </div>);
  }
}

export default Demographics;
