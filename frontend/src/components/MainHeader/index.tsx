import React from 'react';
import { Input, Button, Menu, Badge } from 'antd';
import { Link } from 'react-router-dom';
import { SearchOutlined, UserOutlined, LogoutOutlined, ProfileOutlined, ShoppingCartOutlined, HeartOutlined, MenuUnfoldOutlined, GiftOutlined } from '@ant-design/icons';
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
      icon={<UserOutlined />}
    >
      <Menu.Item key="orders" icon={ <GiftOutlined className="icon"/>}>
      <Link to="/orders">My Orders</Link>
      </Menu.Item>
      <Menu.Item key="setting:1"><ProfileOutlined />My Profile</Menu.Item>
      <Menu.Item key="setting:2"><LogoutOutlined />Log out</Menu.Item>
    </SubMenu>
  ) : (
    <Menu.Item key="mail" icon={<UserOutlined />}>
      <Link to="/login">Login </Link>
    </Menu.Item>
  )

  return (
    <MainHeaderStyles className="container-fluid">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="iBuy logo" width="48" height="48" />
          <span>iBuy</span>
        </Link>
      </div>
      <div className="mobile-visible">
        <MobileMenu visible={visible} onClose={onClose} />
      </div>
      <div className="search-bar mobile-hidden">
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
          <Menu.Item key="cart" 
            icon={
              <>
                <Badge count={2} showZero />
                <ShoppingCartOutlined />
              </>
            }
          >
            <Link to="/cart">Cart</Link>
          </Menu.Item>
          <Menu.Item key="wishlist" 
            icon={
              <>
                <Badge count={2} showZero />&nbsp;
                <HeartOutlined />
              </>
            }
            >
            <Link to="/wishlist">Wishlist</Link>
          </Menu.Item>
          {account}
        </Menu>
      </div>
    </MainHeaderStyles>
  )
}
