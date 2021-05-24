import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogin } from '../../actions/auth';
import './login.css';
import { Formik } from 'formik';
import * as Yup from 'yup';

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(false);
    await dispatch(startLogin(values));
  };

  return (
    <Formik
      //TODO: In production, this initial form must be a empty string
      initialValues={{ email: 'challenge@alkemy.org', password: 'react' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
          .min(5, 'Password must be at least 5 characters')
          .required('Required'),
      })}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <div className="container login-container animate__animated animate__fadeIn animate__faster ">
          <div className="col-md-12 login-form">
            <h3 data-testid="loginScreen">Login</h3>
            <form onSubmit={formik.handleSubmit}>
              <div className="input-group mb-1">
                <input
                  placeholder="Email"
                  className={`form-control ${
                    formik.touched.email && formik.errors.email && 'is-invalid'
                  }`}
                  id="email"
                  type="email"
                  autoComplete="off"
                  {...formik.getFieldProps('email')}
                />
              </div>

              <div className="input-group mb-4">
                {formik.touched.email && formik.errors.email ? (
                  <div className="error" data-testid="email-error">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>

              <div className="input-group mb-1">
                <input
                  placeholder="Password"
                  className={`form-control ${
                    formik.touched.password &&
                    formik.errors.password &&
                    'is-invalid'
                  }`}
                  id="password"
                  type="password"
                  {...formik.getFieldProps('password')}
                />
              </div>

              <div className="input-group mb-5">
                {formik.touched.password && formik.errors.password ? (
                  <div className="error" data-testid="password-error">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>

              <button
                className="btnSubmit mb-3"
                type="submit"
                disabled={!formik.isValid}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
};
