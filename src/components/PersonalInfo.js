import React from 'react';
import Email from './Email';
import Text from './Text';

export default class PersonalInfo extends React.Component {
  render() {
    return (
      <div className="div">
        <Text />
        <Email />
        <div className="Phone">Phone Number</div>
      </div>
    );
  }
}
