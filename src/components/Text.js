import React from 'react';

export default class Text extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="" />
      </div>
    );
  }
}
