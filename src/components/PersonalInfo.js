import React from 'react';
import Email from './Email';
import PhoneNumber from './PhoneNumber';
import Text from './Text';

export default class PersonalInfo extends React.Component {
  render() {
    return (
      <div className="div">
        <Text />
        <Email />
        <PhoneNumber />
        <button type="submit">Finish</button>
      </div>
    );
  }
}
