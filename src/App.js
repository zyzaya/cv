import React from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <PersonalInfo edit={true} onEdit={(info) => console.log(info)} />
      </div>
    );
  }
}
