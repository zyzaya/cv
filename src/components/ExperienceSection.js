import React, { useState } from 'react';
import Text from './Text';
import '../styles/ExperienceSection.css';

export default function ExperienceSection(props) {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [start, setStart] = useState('');
  const [finish, setFinish] = useState('');

  function changeCompany(value) {
    setCompany(value);
    handleChange({ company: value });
  }

  function changePosition(value) {
    setPosition(value);
    handleChange({ position: value });
  }

  function changeStart(value) {
    setStart(value);
    handleChange({ start: value });
  }

  function changeFinish(value) {
    setFinish(value);
    handleChange({ finish: value });
  }

  function handleChange(value) {
    let info = {
      company: value.company || company,
      position: value.position || position,
      start: value.start || start,
      finish: value.finish || finish,
    };
    props.onChange(info);
  }

  let remove = '';
  if (props.edit) {
    remove = <button onClick={props.onDelete}>Delete</button>;
  }

  return (
    <div className="ExperienceSection">
      <Text
        name="Company"
        type="text"
        edit={props.edit}
        onChange={changeCompany}
      />
      <Text
        name="Position"
        type="text"
        edit={props.edit}
        onChange={changePosition}
      />
      <Text name="Start" type="date" edit={props.edit} onChange={changeStart} />
      <Text
        name="Finish"
        type="date"
        edit={props.edit}
        onChange={changeFinish}
      />
      {remove}
    </div>
  );
}
