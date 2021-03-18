import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUser= (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePW= (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let formData = {username: this.state.username, password: this.state.password}
    if(formData.username !== "" && formData.password !== ""){
    this.props.handleLogin(formData)
    }
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input onChange={event => this.handleUser(event)}id="username" name="username" type="text" value={this.state.user}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={event => this.handlePW(event)} id="password" name="password" type="password" value={this.state.pw}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
