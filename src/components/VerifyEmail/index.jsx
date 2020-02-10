import React from 'react';
import { Alert } from 'antd';

const VerifyEmail = () => {
  return (
    <div>
      <h1>Thanks for signing up!</h1>

      <Alert
        type="success"
        message="An email with a verification link has been sent 🎉"
      />
    </div>
  );
};

export default VerifyEmail;
