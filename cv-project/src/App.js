import React from 'react';
import './styles/App.css';

import PersonalInfo from './components/PersonalInfo';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <h1 className="website-title">Resume Creator</h1>
        <PersonalInfo />
        <div className="education-container">
          <h2 className="education-container-title">Education</h2>
        </div>
        <div className="experience-container">
          <h2 className="experience-container-title">Work Experience</h2>
        </div>
      </div>
    );
  }
}

export default App;
