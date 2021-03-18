import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.maxChars)
    this.state = {
      chars: props.maxChars,
      val: ""
    };
    
  }

  handleOnChange = (event) => {
    this.setState({
      chars: this.state.chars - 1,
      val: event.target.value
    })
    console.log(this.state.chars)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.handleOnChange(event)}   type="text" name="message" id="message" value={this.state.val} />
        <p>{this.state.chars} Characters Left</p>
      </div>
    );
  }
}

export default TwitterMessage;
