import React from 'react';
import Text from './Text';

export default class EducationSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', title: '', date: '' };
    this.changeName = this.changeName.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  changeName(value) {
    this.setState({ name: value });
    console.log(value);
    this.handleChange({ name: value });
  }

  changeTitle(value) {
    this.setState({ title: value });
    console.log(value);
    this.handleChange({ title: value });
  }

  changeDate(value) {
    this.setState({ date: value });
    console.log(value);
    this.handleChange({ date: value });
  }

  handleChange(value) {
    let info = {
      name: value.name || this.state.name,
      title: value.title || this.state.title,
      date: value.date || this.state.date,
    };
    console.log(info);
    this.props.onChange(info);
  }

  handleDelete(e) {
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
          name="School Name"
          type="text"
          edit={this.props.edit}
          onChange={this.changeName}
        />
        <Text
          name="Title of Study"
          type="text"
          edit={this.props.edit}
          onChange={this.changeTitle}
        />
        <Text
          name="Date of Study"
          type="date"
          edit={this.props.edit}
          onChange={this.changeDate}
        />
        {remove}
      </div>
    );
  }
}
