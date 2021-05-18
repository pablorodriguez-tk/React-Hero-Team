import React from 'react';
import useForm from '../../hooks/useForm';
import './login.css';

export const LoginScreen = () => {
  const initialForm = {
    //TODO: In production, this initial form must be a empty string
    email: 'challange@alkemy.org',
    password: 'react',
  };

  const [formValues, handleInputChange] = useForm(initialForm);

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'challange@alkemy.org' && password === 'react') {
      console.log('Login');
      //TODO: dispatch login
    } else {
      console.log('Invalid email or password');
    }
  };

  return (
    <div className="container login-container animate__animated animate__fadeIn animate__faster ">
      <div className="col-md-12 login-form">
        <h3>Login</h3>
        <form onSubmit={handleLogin}>
          <div className="input-group mb-3">
            <input
              className="form-control"
              type="text"
              placeholder="Email"
              name="email"
              autoComplete="off"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group mb-3">
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group mb-3">
            <input
              className="btnSubmit"
              type="submit"
              value="Login"
              // TODO:disabled={loading}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
