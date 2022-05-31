import React from 'react';

export default class PhoneNumber extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <label htmlFor="name">Phone Number</label>
        <input type="tel" name="" id="" />
      </div>
    );
  }
}
