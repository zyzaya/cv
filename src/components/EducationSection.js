import React, { useState } from 'react';
import Text from './Text';
import '../styles/EducationSection.css';

export default function EducationSection(props) {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  function changeName(value) {
    setName(value);
    handleChange({ name: value });
  }

  function changeTitle(value) {
    setTitle(value);
    this.setState({ title: value });
    handleChange({ title: value });
  }

  function changeDate(value) {
    setDate(value);
    handleChange({ date: value });
  }

  function handleChange(value) {
    let info = {
      name: value.name || name,
      title: value.title || title,
      date: value.date || date,
    };
    props.onChange(info);
  }

  let remove = '';
  if (props.edit) {
    remove = <button onClick={props.onDelete}>Delete</button>;
  }

  return (
    <div className="EducationSection">
      <Text
        name="School Name"
        type="text"
        edit={props.edit}
        onChange={changeName}
      />
      <Text
        name="Title of Study"
        type="text"
        edit={props.edit}
        onChange={changeTitle}
      />
      <Text
        name="Date of Study"
        type="date"
        edit={props.edit}
        onChange={changeDate}
      />
      {remove}
    </div>
  );
}
