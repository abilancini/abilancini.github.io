import React, { Component } from 'react';

export default class Name extends Component {

  handleInputChange = (event) => {
    let name_value = event.target.value;
    this.props.callbackFromParent(name_value);
  }

  render() {
    return (
      <form>
        <label>
          Employee Name:
          <input type="text" value={this.props.name_value} name="name_value" onChange={this.handleInputChange} />
        </label>
        <br />
      </form>
    );
  }
}
