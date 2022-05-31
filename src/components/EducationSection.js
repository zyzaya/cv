import React from 'react';
import Text from './Text';

export default class EducationSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { edit: props.edit, name: '', title: '', date: '' };
    this.changeName = this.changeName.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  changeName(value) {
    this.setState({ name: value });
    this.handleChange();
  }

  changeTitle(value) {}

  changeDate(value) {}

  handleChange() {
    let info = {
      name: this.state.name,
      title: this.state.title,
      date: this.state.date,
    };
    this.props.onChange(info);
  }

  render() {
    return (
      <div>
        <Text
          name="School Name"
          type="text"
          edit={this.state.edit}
          onChange={this.changeName}
        />
        <Text
          name="Title of Study"
          type="text"
          edit={this.state.edit}
          onChange={this.handleChange}
        />
        <Text
          name="Date of Study"
          type="date"
          edit={this.state.edit}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
