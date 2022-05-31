import React from 'react';
import './App.css';
import EducationInfo from './components/EducationInfo';
import ExperienceInfo from './components/ExperienceInfo';
import PersonalInfo from './components/PersonalInfo';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <PersonalInfo edit={true} onEdit={(info) => console.log(info)} />
        <EducationInfo edit={true} onEdit={(info) => console.log(info)} />
        <ExperienceInfo edit={true} onEdit={(info) => console.log(info)} />
      </div>
    );
  }
}
