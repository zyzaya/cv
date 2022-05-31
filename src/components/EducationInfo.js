import React from 'react';

export default class EducationInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { edit: props.edit };
    this.editInfo = this.editInfo.bind(this);
  }

  editInfo() {
    this.setState({ edit: !this.state.edit });
  }

  render() {
    return (
      <div>
        <div>Education Section</div>
        <button>Add Section</button>
        <button onClick={this.editInfo}>
          {this.state.edit ? 'Finish' : 'Edit'}
        </button>
      </div>
    );
  }
}
