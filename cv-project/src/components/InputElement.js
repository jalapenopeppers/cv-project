import React, { useRef } from 'react';

class InputElement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.placeholder,
      takeInput: false,
    };
  }

  onChange = (e) => {
    e.preventDefault();
    this.setState({
      text: e.target.value
    });
    console.log(e.target.value);
  }

  onClick = (e) => {
    e.preventDefault();
    // ref.current.focus();
    this.setState({
      // takeInput: this.state.takeInput ? false : true,
      takeInput: true,
    });
  }

  onBlur = (e) => {
    e.preventDefault();
    this.setState({
      takeInput: false,
    });
  }

  render() {
    const { type, placeholder } = this.props;
    let displayInfo;
    if (this.state.takeInput) {
      displayInfo = <input
        type={type}
        onChange={this.onChange}
        onBlur={this.onBlur}
        placeholder={placeholder}
        value={this.state.text}
        autoFocus
      />
    } else {
      displayInfo = <p>{this.state.text}</p>
    }

    return(
      <div class="input-container" onClick={this.onClick}>
        {displayInfo}
      </div>
    );
  }
}

export default InputElement;