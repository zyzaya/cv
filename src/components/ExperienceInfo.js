import React from 'react';
import uniqid from 'uniqid';
import ExperienceSection from './ExperienceSection';
import '../styles/ExperienceInfo.css';

export default class ExperienceInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { edit: props.edit, sections: [] };
    this.addSection = this.addSection.bind(this);
    this.editInfo = this.editInfo.bind(this);
    this.deleteSection = this.deleteSection.bind(this);
  }

  editInfo() {
    if (this.state.edit) {
      let info = [];
      this.state.sections.map((val) =>
        info.push({
          company: val.company,
          position: val.position,
          start: val.start,
          finish: val.finish,
        })
      );
      this.props.onEdit(info);
    }
    this.setState({ edit: !this.state.edit });
  }

  addSection() {
    this.setState((state, props) => ({
      sections: state.sections.concat({
        key: uniqid(),
        company: '',
        position: '',
        start: '',
        finish: '',
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

  deleteSection(key) {
    this.setState((state, props) => ({
      sections: state.sections.filter((e) => e.key !== key),
    }));
  }

  render() {
    return (
      <div className="ExperienceInfo">
        <h1>Experience</h1>
        <ul>
          {this.state.sections.map((e) => (
            <ExperienceSection
              key={e.key}
              edit={this.state.edit}
              onChange={(info) => this.editSection(e.key, info)}
              onDelete={() => this.deleteSection(e.key)}
            />
          ))}
        </ul>
        <button onClick={this.addSection}>Add Section</button>
        <button onClick={this.editInfo}>
          {this.state.edit ? 'Finish' : 'Edit'}
        </button>
      </div>
    );
  }
}
