import React, { Component } from 'react';

export default class NameTag extends Component {



  render() {
    return (
      <div className="NameTagBox">
          <div>
            <span className="titleText">
              {this.props.name_value}
            </span>
            <span id="circle" style={ { backgroundColor: `${ this.props.color }` } }>
              <div id="text" color={this.props.text_color}>{this.props.disc}</div>
            </span>
          </div>
        <h3 className="nonTitleText">{this.props.job_title}</h3>
        <h3 className="nonTitleText">{this.props.question} {this.props.answer}</h3>
      </div>
    )
  }
}
