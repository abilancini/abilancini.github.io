import React, { Component } from 'react';

export default class Disc extends Component {

  handleDiscChange = (event) => {
    let disc = event.target.value;
    let disc_color = event.target.options[event.target.options.selectedIndex];
    this.props.onChange(disc_color.attributes[0].nodeValue); //event.target.value, disc_color.color)
    this.props.callbackDisc(disc);
  }

  render() {
    return (
      <form>
        <label>
          DiSC profile:
          <select value={this.props.disc} name="disc" onChange={this.handleDiscChange}>
            <option color="to come" value="default">None</option>
            <option color="#0F0" value="D">D</option>
            <option color="#F00" value="i">i</option>
            <option color="#00F" value="S">S</option>
            <option color="#FFDF00" value="C">C</option>
            <option color="#00F" value="SC">SC</option>
            <option color="#FFDF00" value="CS">CS</option>
            <option color="#0F0" value="Di">Di</option>
            <option color="#F00" value="iD">iD</option>
            <option color="#0F0" value="DC">DC</option>
            <option color="#FFDF00" value="CD">CD</option>
            <option color="#00F" value="Si">Si</option>
            <option color="#F00" value="iS">iS</option>
          </select>
        </label>
      </form>
    );
  }
}
