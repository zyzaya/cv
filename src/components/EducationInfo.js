import React, { useState } from 'react';
import uniqid from 'uniqid';
import EducationSection from './EducationSection';
import '../styles/EducationInfo.css';

export default function EducationInfo(props) {
  // constructor(props) {
  //   super(props);
  //   this.state = { edit: props.edit, sections: [] };
  //   this.editInfo = this.editInfo.bind(this);
  //   this.addSection = this.addSection.bind(this);
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

  function addSection(e) {
    setSections(
      sections.concat({
        key: uniqid(),
        name: '',
        title: '',
        date: '',
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
    <div className="EducationInfo">
      <h1>Education</h1>
      <ul>
        {sections.map((e) => (
          <EducationSection
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
