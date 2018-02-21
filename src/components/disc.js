import React, { Component } from 'react';

export default class Disc extends Component {

  handleDiscChange = (event) => {
    let disc = event.target.value;
    let disc_color = event.target.options[event.target.options.selectedIndex];
    this.props.onChange(disc_color.attributes[0].nodeValue); 
    this.props.callbackDisc(disc);
  }

  render() {
    return (
      <form>
        <label>
          DiSC profile:
          <select value={this.props.disc} name="disc" onChange={this.handleDiscChange}>
            <option color="to come" value="default">None</option>
            <option color="#006633" value="D">D</option>
            <option color="#E72F13" value="i">i</option>
            <option color="#138AE7" value="S">S</option>
            <option color="#EEC808" value="C">C</option>
            <option color="#138AE7" value="SC">SC</option>
            <option color="#EEC808" value="CS">CS</option>
            <option color="#006633" value="Di">Di</option>
            <option color="#E72F13" value="iD">iD</option>
            <option color="#006633" value="DC">DC</option>
            <option color="#EEC808" value="CD">CD</option>
            <option color="#138AE7" value="Si">Si</option>
            <option color="#E72F13" value="iS">iS</option>
          </select>
        </label>
      </form>
    );
  }
}
