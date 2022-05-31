import React from 'react';
import uniqid from 'uniqid';
import EducationSection from './EducationSection';

export default class EducationInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { edit: props.edit, sections: [] };
    this.editInfo = this.editInfo.bind(this);
    this.addSection = this.addSection.bind(this);
  }

  editInfo() {
    if (this.state.edit) {
      let info = [];
      this.state.sections.map((val) =>
        info.push({
          name: val.name,
          title: val.title,
          date: val.date,
        })
      );
      this.props.onEdit(info);
    }
    this.setState({ edit: !this.state.edit });
  }

  addSection(e) {
    this.setState((state, props) => ({
      sections: state.sections.concat({
        key: uniqid(),
        name: '',
        title: '',
        date: '',
      }),
    }));
  }

  editSection(key, info) {
    this.setState((state, props) => ({
      sections: state.sections.map((e) =>
        e.key === key ? { key: e.key, ...info } : e
      ),
    }));
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.sections.map((e) => (
            <EducationSection
              key={e.key}
              edit={this.state.edit}
              onChange={(info) => this.editSection(e.key, info)}
            />
          ))}
        </ul>
        <div>Education Section</div>
        <button onClick={this.addSection}>Add Section</button>
        <button onClick={this.editInfo}>
          {this.state.edit ? 'Finish' : 'Edit'}
        </button>
      </div>
    );
  }
}
