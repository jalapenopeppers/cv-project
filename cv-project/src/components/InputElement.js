import React from 'react';

class InputElement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  onChange = (e) => {
    e.preventDefault();
    this.setState({
      text: e.target.value
    });
    console.log(e.target.value);
  }

  render() {
    const { type, placeholder } = this.props;
    return(
      <input 
        type={type}
        onChange={this.onChange}
        placeholder={placeholder}
      />
    );
  }
}

export default InputElement;