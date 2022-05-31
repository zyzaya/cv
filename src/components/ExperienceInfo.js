import React from 'react';
import uniqid from 'uniqid';
import ExperienceSection from './ExperienceSection';

export default class ExperienceInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { edit: props.edit, sections: [] };
    this.addSection = this.addSection.bind(this);
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

  render() {
    return (
      <div>
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
