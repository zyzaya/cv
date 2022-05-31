import React from 'react';
import Text from './Text';

export default class ExperienceSection extends React.Component {
  constructor(props) {
    super(props);

    this.changeCompany = this.changeCompany.bind(this);
    this.changePosition = this.changePosition.bind(this);
    this.changeStart = this.changeStart.bind(this);
    this.changeFinish = this.changeFinish.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  changeCompany(value) {
    this.setState({ company: value });
    this.handleChange({ company: value });
  }

  changePosition(value) {
    this.setState({ position: value });
    this.handleChange({ position: value });
  }

  changeStart(value) {
    this.setState({ start: value });
    this.handleChange({ start: value });
  }

  changeFinish(value) {
    this.setState({ finish: value });
    this.handleChange({ finish: value });
  }

  handleChange(value) {
    let info = {
      company: value.company || this.state.company,
      position: value.position || this.state.position,
      start: value.start || this.state.start,
      finish: value.finish || this.state.finish,
    };
    this.props.onChange(info);
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
          edit={this.props.edit}
          onChange={this.changeCompany}
        />
        <Text
          name="position"
          type="text"
          edit={this.props.edit}
          onChange={this.changePosition}
        />
        <Text
          name="start"
          type="date"
          edit={this.props.edit}
          onChange={this.changeStart}
        />
        <Text
          name="finish"
          type="date"
          edit={this.props.edit}
          onChange={this.changeFinish}
        />
        {remove}
      </div>
    );
  }
}
