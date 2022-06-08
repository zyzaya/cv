import React from 'react';
import Text from './Text';
import '../styles/ExperienceSection.css';

export default class ExperienceSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { company: '', position: '', start: '', finish: '' };
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
      <div className="ExperienceSection">
        <Text
          name="Company"
          type="text"
          edit={this.props.edit}
          onChange={this.changeCompany}
        />
        <Text
          name="Position"
          type="text"
          edit={this.props.edit}
          onChange={this.changePosition}
        />
        <Text
          name="Start"
          type="date"
          edit={this.props.edit}
          onChange={this.changeStart}
        />
        <Text
          name="Finish"
          type="date"
          edit={this.props.edit}
          onChange={this.changeFinish}
        />
        {remove}
      </div>
    );
  }
}
