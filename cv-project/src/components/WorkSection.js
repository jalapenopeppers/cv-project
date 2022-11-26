import React from 'react';
import WorkEntry from './WorkEntry';
import uniqid from 'uniqid';

class WorkSection extends React.Component {
  constructor() {
    super()

    let id = uniqid();
    this.state = {
      workArr: [
        {
          id,
          element: <WorkEntry
          companyName="Company"
          timePeriod="Time period"
          roleName="Role"
          achievements="Achievements:"
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
      workArr: this.state.workArr.concat({
        id,
        element: <WorkEntry
          companyName="Company"
          timePeriod="Time period"
          roleName="Role"
          achievements="Achievements:"
          key={id}
          />
      }),
    });
  }

  deleteEntry = (id, e) => {
    // e is forwarded automatically because .bind is used when assigning the event handler
    e.preventDefault();
    const workArr = this.state.workArr.filter(entry => entry.id !== id);
    this.setState({
      workArr,
    });
  }

  render() {
    const { workArr } = this.state;
    return(
      <div className="work-section">
        <ul className="work-entries">
          {workArr.map((workObj) => {
            return (
              <div className="work-entry" key={workObj.id}>
                {workObj.element}
                <button onClick={this.deleteEntry.bind(this, workObj.id)}>Delete</button>
              </div>
            );
          })}
        </ul>
        <button 
          className="add-button add-work-button" 
          onClick={this.addEntry}
          >
            Add
        </button>
      </div>
    );
  }
}

export default WorkSection;