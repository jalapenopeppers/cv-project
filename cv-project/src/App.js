import React from 'react';
import './styles/App.css';

import PersonalInfo from './components/PersonalInfo';
import EducationSection from './components/EducationSection';
import WorkSection from './components/WorkSection';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1 className="website-title">Resume Creator</h1>
        <PersonalInfo />
        <div className="education-container">
          <h2 className="education-container-title">Education</h2>
          <EducationSection />
        </div>
        <div className="experience-container">
          <h2 className="experience-container-title">Work Experience</h2>
          <WorkSection />
        </div>
      </div>
    );
  }
}

export default App;
