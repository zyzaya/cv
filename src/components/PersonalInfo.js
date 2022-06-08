import React, { useState } from 'react';
import '../styles/PersonalInfo.css';
import Text from './Text';

export default function PersonalInfo(props) {
  const [edit, setEdit] = useState(props.edit);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  function editInfo() {
    if (edit) props.onEdit({ name, email, phone });
    setEdit(!edit);
  }

  return (
    <div className="PersonalInfo">
      <h1>Contact Info</h1>
      <Text name="Name" type="text" edit={edit} onChange={setName} />
      <Text name="Email" type="email" edit={edit} onChange={setEmail} />
      <Text name="Phone Number" type="tel" edit={edit} onChange={setPhone} />
      <button type="submit" onClick={editInfo}>
        {edit ? 'Finish' : 'Edit'}
      </button>
    </div>
  );
}
