import React from 'react';
import Text from './Text';

export default class ExperienceInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { edit: props.edit };
  }

  render() {
    return (
      <div>
        <h1>Experience</h1>
        <Text
          name="company"
          type="text"
          edit={this.state.edit}
          onChange={(val) => console.log(val)}
        />
        <Text
          name="position"
          type="text"
          edit={this.state.edit}
          onChange={(val) => console.log(val)}
        />
        <Text
          name="start"
          type="date"
          edit={this.state.edit}
          onChange={(val) => console.log(val)}
        />
        <Text
          name="finish"
          type="date"
          edit={this.state.edit}
          onChange={(val) => console.log(val)}
        />
        <button onClick={this.addSection}>Add Section</button>
        <button onClick={this.editInfo}>
          {this.state.edit ? 'Finish' : 'Edit'}
        </button>
      </div>
    );
  }
}
