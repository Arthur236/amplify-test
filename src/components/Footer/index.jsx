import React from 'react';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter id="footer" style={{ textAlign: 'center' }}>
      Amplify Test ©2020 Created by Arthur
    </AntFooter>
  );
};

export default Footer;
