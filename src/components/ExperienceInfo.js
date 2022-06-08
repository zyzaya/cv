import React, { useState } from 'react';
import uniqid from 'uniqid';
import ExperienceSection from './ExperienceSection';
import '../styles/ExperienceInfo.css';

export default function ExperienceInfo(props) {
  // constructor(props) {
  //   super(props);
  //   this.state = { edit: props.edit, sections: [] };
  //   this.addSection = this.addSection.bind(this);
  //   this.editInfo = this.editInfo.bind(this);
  //   this.deleteSection = this.deleteSection.bind(this);
  // }

  const [edit, setEdit] = useState(props.edit);
  const [sections, setSections] = useState([]);

  function editInfo() {
    if (edit) {
      let info = [];
      sections.map((val) => info.push({ ...val }));
      props.onEdit(info);
    }
    setEdit(!edit);
  }

  function addSection() {
    setSections(
      sections.concat({
        key: uniqid(),
        company: '',
        position: '',
        start: '',
        finish: '',
      })
    );
  }

  function editSection(key, info) {
    setSections(
      sections.map((e) => (e.key === key ? { key: e.key, ...info } : e))
    );
  }

  function deleteSection(key) {
    setSections(sections.filter((e) => e.key !== key));
  }

  return (
    <div className="ExperienceInfo">
      <h1>Experience</h1>
      <ul>
        {sections.map((e) => (
          <ExperienceSection
            key={e.key}
            edit={edit}
            onChange={(info) => editSection(e.key, info)}
            onDelete={() => deleteSection(e.key)}
          />
        ))}
      </ul>
      <button onClick={addSection}>Add Section</button>
      <button onClick={editInfo}>{edit ? 'Finish' : 'Edit'}</button>
    </div>
  );
}
