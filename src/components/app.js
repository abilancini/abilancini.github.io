import React, { Component } from 'react';
import NameTagMaker from './nametag_maker';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Hey Michelle, lets make a name tag:</h1>
          <br />
        </div>
        <NameTagMaker />
      </div>
    );
  }
}
