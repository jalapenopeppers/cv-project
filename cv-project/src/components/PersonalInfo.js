import React from 'react';

import InputElement from './InputElement';

class PersonalInfo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="personal-info">
        <InputElement type="text" placeholder="Full name"/>
        <InputElement type="email" placeholder="Email"/>
        <InputElement type="phone" placeholder="Phone"/>
      </div>
    );
  }
}

export default PersonalInfo;