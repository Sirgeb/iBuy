import React from 'react';
import { Input, Button, Menu, Badge } from 'antd';
import { Link } from 'react-router-dom';
import { SearchOutlined, UserOutlined, LogoutOutlined, ProfileOutlined, ShoppingCartOutlined, QuestionCircleOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import Logo from '../../assets/logo.svg';
import MainHeaderStyles from './styles';
import MobileMenu from './MobileMenu';

export const MainHeader = () => {
  const { SubMenu } = Menu;
  const [visible, setVisible] = React.useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  
  const onClose = () => {
    setVisible(false);
  };

  const loggedIn = false;

  const account = loggedIn ? (
    <SubMenu
      key="SubMenu"
      title="Account"
      icon={<UserOutlined />}
    >
      <Menu.Item key="setting:1"><ProfileOutlined />Profile</Menu.Item>
      <Menu.Item key="setting:2"><LogoutOutlined />Log out</Menu.Item>
    </SubMenu>
  ) : (
    <Menu.Item key="mail" icon={<UserOutlined />}>
      <Link to="/login">Login</Link>
    </Menu.Item>
  )

  return (
    <MainHeaderStyles className="container-fluid">
      <div className="logo">
        <img src={Logo} alt="iBuy logo" width="48" height="48" />
        <span>iBuy</span>
      </div>
      <div className="search-bar">
        <Input
          prefix={<SearchOutlined />} 
          placeholder="Search products, brands, and categories" 
          className="input"
        />
        <Button type="primary">Search</Button>
      </div>
      <div className="mobile-visible menu-button">
        <Button type="primary" onClick={showDrawer}><MenuUnfoldOutlined /></Button>
      </div>
      <div className="right-bar mobile-hidden">
        <Menu mode="horizontal">
          <Menu.Item key="cart" icon={
            <>
              <Badge count={2} showZero />
              <ShoppingCartOutlined />
            </>
          }>
            Cart
          </Menu.Item>
          <Menu.Item key="help" icon={<QuestionCircleOutlined />}>
            Help
          </Menu.Item>
          {account}
        </Menu>
      </div>
      <MobileMenu visible={visible} onClose={onClose} />
    </MainHeaderStyles>
  )
}
