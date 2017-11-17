import React, { Component } from 'react';

export default class Question extends Component {

  handleInputChange = (event) => {
    let question = event.target.value;
    this.props.callbackQuestion(question);
  }

  render() {
    return (
      <form>
        <label>
          Question:
          <select value={this.props.question} name="question" onChange={this.handleInputChange}>
            <option value="Please make a selection ">None Selected</option>
            <option value="Favorite Season: ">Favorite Season:</option>
            <option value="Favorite area of Cleveland: ">Favorite Area of Cleveland:</option>
            <option value="Favorite Sports Team: ">Favorite Sports Team:</option>
            <option value="Favorite TV Show: ">Favorite TV Show:</option>
            <option value="Favorite Movie: ">Favorite Movie:</option>
            <option value="Favorite Vacation Spot: ">Favorite Vacation Spot:</option>
          </select>
        </label>
        <br />
      </form>
    );
  }
}
