import React from 'react';
import Text from './Text';

export default class ExperienceSection extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDelete() {
    this.props.onDelete();
  }

  render() {
    let remove = '';
    if (this.props.edit) {
      remove = <button onClick={this.handleDelete}>Delete</button>;
    }

    return (
      <div>
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
        {remove}
      </div>
    );
  }
}
