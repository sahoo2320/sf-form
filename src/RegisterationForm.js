import React, { Component } from 'react';
import './RegisterationForm.css';

class RegistrationForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      submitted: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });

    // Add your validation and form submission logic here
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, email, password, confirmPassword, submitted } = this.state;
    return (
      <div className="registration-container">
        <form className="registration-form left" onSubmit={this.handleSubmit}>
          <h2>Register</h2>
          <div className={`form-group ${submitted && !username ? 'error' : ''}`}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            {submitted && !username && (
              <div className="error-message">Username is required</div>
            )}
          </div>
          <div className={`form-group ${submitted && !email ? 'error' : ''}`}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            {submitted && !email && (
              <div className="error-message">Email is required</div>
            )}
          </div>
          <div className={`form-group ${submitted && !password ? 'error' : ''}`}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            {submitted && !password && (
              <div className="error-message">Password is required</div>
            )}
          </div>
          <div
            className={`form-group ${submitted &&
              password !== confirmPassword &&
              'error'}`}
          >
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
            />
            {submitted && password !== confirmPassword && (
              <div className="error-message">Passwords do not match</div>
            )}
          </div>
          <div className="form-group">
            <button type="submit">Register</button>
          </div>
          </form>
          <form className="registration-form right" onSubmit={this.handleSubmit}>
          <h2>Register</h2>
          <div className={`form-group ${submitted && !username ? 'error' : ''}`}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            {submitted && !username && (
              <div className="error-message">Username is required</div>
            )}
          </div>
          <div className={`form-group ${submitted && !email ? 'error' : ''}`}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            {submitted && !email && (
              <div className="error-message">Email is required</div>
            )}
          </div>
          <div className={`form-group ${submitted && !password ? 'error' : ''}`}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            {submitted && !password && (
              <div className="error-message">Password is required</div>
            )}
          </div>
          <div
            className={`form-group ${submitted &&
              password !== confirmPassword &&
              'error'}`}
          >
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
            />
            {submitted && password !== confirmPassword && (
              <div className="error-message">Passwords do not match</div>
            )}
          </div>
          <div className="form-group">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
