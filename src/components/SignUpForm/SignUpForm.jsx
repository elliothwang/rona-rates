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
            {/* <div className="usernameInput"> */}
              <input 
                type="text" 
                name="name" 
                value={this.state.name} 
                onChange={this.handleChange} 
                placeholder="Name" 
                required 
              />
            {/* </div> */}
            {/* <div className="emailInput"> */}
              <input 
                type="text" 
                name="email" 
                value={this.state.email} 
                onChange={this.handleChange} 
                placeholder="Email" 
                required 
              />
            {/* </div> */}
            {/* <div className="passwordInput"> */}
              <input 
                type="password" 
                name="password" 
                value={this.state.password} 
                onChange={this.handleChange} 
                placeholder="Password" 
                required 
              />
            {/* </div> */}
            {/* <div className="passwordConfirmInput"> */}
              <input 
                type="password" 
                name="confirm" 
                value={this.state.confirm} 
                onChange={this.handleChange} 
                placeholder="Confirm Password"
                required 
              />
            {/* </div> */}
            <button type="submit" disabled={disable}>Sign Up</button>
          </form>
        </div>
        <p className="error-message" style={{ display: !this.state.error ? "none" : "inline"}}>&nbsp;{this.state.error}</p>
      </div>
    );
  }
}