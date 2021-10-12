import './SignUpForm.css';
import React, { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = {...this.state};
      delete formData.error;
      delete formData.confirm;
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      // baby step
      this.props.setUser(user);
      this.props.closeAuthPopUp();
    } catch (err) {
      // An error occurred
      this.setState({ error: 'Sign Up Failed - Please Try Again'});
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="signUpTitle">Hi there!</div>
        <div className="signUpTag">Create your free account here.</div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
              <input type="text" name="name" value={this.state.name} placeholder="Name" onChange={this.handleChange} required autoFocus />
              <input type="text" name="email" value={this.state.email} placeholder="Email" onChange={this.handleChange} required />
              <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleChange} required />
              <input type="password" name="confirm" value={this.state.confirm} placeholder="Confirm Password" onChange={this.handleChange} required />
            <button type="submit" disabled={disable}>Sign Up</button>
          </form>
        </div>
        <p className="error-message" style={{ display: !this.state.error ? "none" : "inline"}}>&nbsp;{this.state.error}</p>
      </div>
    );
  }
}