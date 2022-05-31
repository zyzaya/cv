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
        <button onClick={this.addSection}>Add Section</button>
        <button onClick={this.editInfo}>
          {this.state.edit ? 'Finish' : 'Edit'}
        </button>
      </div>
    );
  }
}
