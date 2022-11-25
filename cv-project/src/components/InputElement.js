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
      if (type === 'textarea') {
        displayInfo = <textarea
          onChange={this.onChange}
          onBlur={this.onBlur}
          placeholder={placeholder}
          value={this.state.text}
          autoFocus
        />
      } else {
        displayInfo = <input
          type={type}
          onChange={this.onChange}
          onBlur={this.onBlur}
          placeholder={placeholder}
          value={this.state.text}
          autoFocus
        />
      }
    } else {
      if (type === 'textarea') {
        // Modify text so it renders correctly
        let strArr = this.state.text.split("");
        console.log(strArr);
        displayInfo = [];
        let currStr = '';
        let paragraphIndex = 0;
        for (let i = 0; i < strArr.length; i++) {
          if (strArr[i] !== '\n') {
            console.log('add char');
            currStr = currStr.concat(strArr[i]);

            if (i === strArr.length - 1) {
              console.log('made a word');
              displayInfo.push(<p key={paragraphIndex}>{currStr}</p>);
              paragraphIndex++;
            } 
          } else {
            console.log('made a word');
            displayInfo.push(<p key={paragraphIndex}>{currStr}</p>);
            paragraphIndex++;
            currStr = '';
          }
        }
        // displayInfo = [
        //   <p key='1'> text</p>,
        //   <p key='2'>mas text</p>
        // ]
      } else {
        displayInfo = <p>{this.state.text}</p>
      }
    }

    return(
      <div className="input-container" onClick={this.onClick}>
        {displayInfo}
      </div>
    );
  }
}

export default InputElement;