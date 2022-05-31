import React from 'react';
import Text from './Text';

export default class EducationSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Text
          name="School Name"
          type="text"
          edit={this.state.edit}
          // onChange={(val) => this.setStat}
        />
        <Text
          name="Title of Study"
          type="text"
          edit={this.state.edit}
          // onChange={(val) => this.setStat}
        />
        <Text
          name="Date of Study"
          type="date"
          edit={this.state.edit}
          // onChange={(val) => this.setStat}
        />
      </div>
    );
  }
}
