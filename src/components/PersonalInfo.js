import React from 'react';
import Text from './Text';

export default class PersonalInfo extends React.Component {
  render() {
    return (
      <div className="div">
        <Text />
        <div className="Email">Email</div>
        <div className="Phone">Phone Number</div>
      </div>
    );
  }
}
