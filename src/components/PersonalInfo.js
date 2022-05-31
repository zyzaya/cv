import React from 'react';
import Email from './Email';
import PhoneNumber from './PhoneNumber';
import Text from './Text';

export default class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { edit: props.edit };
    this.editInfo = this.editInfo.bind(this);
  }

  editInfo() {
    if (this.state.edit) this.props.onEdit();
    this.setState({ edit: !this.state.edit });
  }

  render() {
    return (
      <div className="div">
        <Text />
        <Email />
        <PhoneNumber />
        <button type="submit" onClick={this.editInfo}>
          {this.state.edit ? 'Finish' : 'Edit'}
        </button>
      </div>
    );
  }
}
