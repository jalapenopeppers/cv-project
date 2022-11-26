import React from 'react';
import InputElement from './InputElement';

class WorkEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { companyName, timePeriod, roleName, achievements } = this.props;
    return(
      <li>
        <InputElement type="text" placeholder={companyName}/>
        <InputElement type="text" placeholder={timePeriod}/>
        <InputElement type="text" placeholder={roleName}/>
        <InputElement type="textarea" placeholder={achievements}/>
      </li>
    );
  }
}

export default WorkEntry;