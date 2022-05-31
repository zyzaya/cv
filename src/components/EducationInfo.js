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

  render() {
    return (
      <div>
        <ul>
          {this.state.sections.map((e) => (
            <li key={e.key}>
              <EducationSection edit={this.state.edit} />
            </li>
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
