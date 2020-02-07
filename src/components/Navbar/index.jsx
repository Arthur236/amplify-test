import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon, Layout } from 'antd';

const { Header } = Layout;

const Navbar = () => {

  return (
    <Header className="header">
      <div className="logo">
        <Icon type="amazon-square" theme="filled" style={{ color: 'white', fontSize: '30px' }}/>
      </div>

      <div className="nav-links-wrapper">
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
        </div>

        <div className="nav-links right-menu">
          <NavLink to="/signup">Register</NavLink>
          <NavLink to="/signin">Login</NavLink>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
