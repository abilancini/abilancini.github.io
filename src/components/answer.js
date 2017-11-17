import React, { Component } from 'react';

export default class Answer extends Component {

  handleAnswerChange = (event) => {
    let answer = event.target.value;
    this.props.callbackAnswer(answer);
  }

  render() {
    return (
      <form>
        <label>
          Answer:
          <input type="text" value={this.props.answer} name="answer" onChange={this.handleAnswerChange} />
        </label>
        <br />
      </form>
    );
  }
}
