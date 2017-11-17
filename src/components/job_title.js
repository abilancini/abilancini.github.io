import React, { Component } from 'react';

export default class JobTitle extends Component {

  handleInputChange = (event) => {
    let job_title = event.target.value;
    this.props.callbackJobTitle(job_title);
  }

  render() {
    return (
      <form>
        <label>
          Job Title:
          <input type="text" value={this.props.job_title} name="name_value" onChange={this.handleInputChange} />
        </label>
        <br />
      </form>
    );
  }
}
