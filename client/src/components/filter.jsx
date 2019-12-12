import React, { Component } from 'react';
class Filter extends Component {
  state = {}
  render() {

    return (
      <div>
        <form className="form-row form-inline">
          <label className=" mr-2" htmlFor="pincode">Pin Code:</label>
          <input className="form-control mb-2 mr-sm-2" id="pincode" type="text" placeholder="pin" onKeyPress={(e) => this.props.filterPin(e)}></input>
          <label className="mr-2" htmlFor="date">Date:</label>
          <input className="form-control mb-2 mr-sm-2" id="date" type="text" placeholder="date" onKeyPress={(e) => this.props.filterDate(e)}></input>
        </form>
      </div>
    );
  }
}

export default Filter;