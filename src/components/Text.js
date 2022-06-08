import React, { useState } from 'react';
import '../styles/Text.css';

export default function Text(props) {
  const [value, setValue] = useState('');

  function editValue(e) {
    setValue(e.target.value);
    props.onChange(e.target.value);
  }

  if (props.edit) {
    return (
      <div className="Text">
        <label htmlFor="name">{props.name}</label>
        <input type={props.type} onChange={editValue} value={value} />
      </div>
    );
  } else {
    return (
      <div className="Text">
        <label htmlFor="name">{props.name}</label>
        <span>{value}</span>
      </div>
    );
  }
}
