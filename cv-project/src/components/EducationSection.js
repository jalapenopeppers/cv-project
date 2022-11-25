import React from 'react';
import EducationEntry from './EducationEntry';
import uniqid from 'uniqid';

class EducationSection extends React.Component {
  constructor() {
    super()

    let id = uniqid();
    this.state = {
      educationArr: [
        {
          id,
          element: <EducationEntry
          schoolName="School"
          timePeriod="Time period"
          majorName="Major"
          key={id}
          />
        },
      ]
    };
  }

  addEntry = (e) => {
    e.preventDefault();
    let id = uniqid();
    this.setState({
      educationArr: this.state.educationArr.concat({
        id,
        element: <EducationEntry
          schoolName="School"
          timePeriod="Time period"
          majorName="Major"
          key={id}
          />
      }),
    });
  }

  deleteEntry = (id, e) => {
    // e is forwarded automatically because .bind is used when assigning the event handler
    e.preventDefault();
    const educationArr = this.state.educationArr.filter(entry => entry.id !== id);
    this.setState({
      educationArr,
    });
  }

  render() {
    const { educationArr } = this.state;
    return(
      <div className="education-section">
        <ul className="education-entries">
          {educationArr.map((educationObj) => {
            return (
              <div className="education-entry" key={educationObj.id}>
                {educationObj.element}
                <button onClick={this.deleteEntry.bind(this, educationObj.id)}>Delete</button>
              </div>
            );
          })}
        </ul>
        <button 
          className="add-button add-education-button" 
          onClick={this.addEntry}
          >
            Add
        </button>
      </div>
    );
  }
}

export default EducationSection;