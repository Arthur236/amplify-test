import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Form, Icon, Input, message } from 'antd';
import { Auth } from 'aws-amplify';

const SignIn = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const signInRes = await Auth.signIn(formValues.email, formValues.password);

      console.log(signInRes);

      return history.push('./welcome');
    } catch (error) {
      const err = error.message ? error.message : error;

      console.error('Error: ', error);
      return message.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Sign In</h1>

      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          <Input
            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }}/>}
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item>
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>}
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item>
          <Link to="/forgot-password" className="login-form-forgot">
            Forgot password
          </Link>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            disabled={loading}
            loading={loading}
          >
            Login
          </Button>

          <p>
            Or <Link to="/signup">Register now</Link>
          </p>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn;
