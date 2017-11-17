import React, { Component } from 'react';
import Name from './name';
import Question from './question';
import Answer from './answer';
import Disc from './disc';
import JobTitle from './job_title';
import NameTag from './nametag';

export default class NameTagMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name_value: '',
      job_title: '',
      question: '',
      answer: '',
      disc: '',
      disc_color: '#9932CC'
    };

  }

  myCallback = (childData) => {
    this.setState({ name_value: childData });
  }

  jobTitleCallback = (childData) => {
    this.setState({ job_title: childData });
  }

  questionCallback = (childData) => {
    this.setState({ question: childData });
  }

  answerCallback = (childData) => {
    this.setState({ answer: childData });
  }

  discCallback = (childData) => {
    this.setState(
      { disc: childData }
    );
  }

  colorChange = (childData) => {
    this.setState({ disc_color: childData })
  }

  render() {
    return (
      <div>
        <Name callbackFromParent = {this.myCallback}/>
        <JobTitle callbackJobTitle = {this.jobTitleCallback}/>
        <Question callbackQuestion = {this.questionCallback}/>
        <Answer callbackAnswer = {this.answerCallback}/>
        <Disc callbackDisc = {this.discCallback}
          value = {this.state.disc}
          onChange = {this.colorChange}/>
        <br />
        <div>
          <NameTag
            name_value={this.state.name_value}
            job_title={this.state.job_title}
            question={this.state.question}
            answer={this.state.answer}
            disc={this.state.disc}
            color={this.state.disc_color}
          />
        </div>
      </div>
    );
  }
}
