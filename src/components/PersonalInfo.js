import React from 'react';
import Email from './Email';
import PhoneNumber from './PhoneNumber';
import Text from './Text';

export default class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: props.edit,
      name: '',
      email: '',
      phone: '',
    };
    this.editInfo = this.editInfo.bind(this);
  }

  editInfo() {
    if (this.state.edit) {
      let info = {};
      info.name = this.state.name;
      info.email = this.state.email;
      info.phone = this.state.phone;
      this.props.onEdit(info);
    }
    this.setState({ edit: !this.state.edit });
  }

  render() {
    return (
      <div className="div">
        <Text
          edit={this.state.edit}
          onChange={(val) => this.setState({ name: val })}
        />
        <Email />
        <PhoneNumber />
        <button type="submit" onClick={this.editInfo}>
          {this.state.edit ? 'Finish' : 'Edit'}
        </button>
      </div>
    );
  }
}
