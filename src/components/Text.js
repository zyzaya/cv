import React from 'react';

export default class Text extends React.Component {
  constructor(props) {
    super(props);
    this.editValue = this.editValue.bind(this);
    this.state = { value: '' };
  }

  editValue(e) {
    this.setState({ value: e.target.value });
    this.props.onChange(e.target.value);
  }

  render() {
    if (this.props.edit)
      return (
        <div>
          <label htmlFor="name">{this.props.name}</label>
          <input type={this.props.type} onChange={this.editValue} />
        </div>
      );
    else
      return (
        <div className="">
          <label htmlFor="name">{this.props.name}</label>
          <span>{this.state.value}</span>
        </div>
      );
  }
}
