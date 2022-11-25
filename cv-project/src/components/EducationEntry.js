import React from 'react';
import InputElement from './InputElement';

class EducationEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { schoolName, timePeriod, majorName } = this.props;
    return(
      <li>
        <InputElement type="text" placeholder={schoolName}/>
        <InputElement type="text" placeholder={timePeriod}/>
        <InputElement type="text" placeholder={majorName}/>
      </li>
    );
  }
}

export default EducationEntry;