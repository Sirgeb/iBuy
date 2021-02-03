import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import MobileCategoriesStyle from './styles';

const { SubMenu } = Menu;

const MobileCategories= () => {
  const handleClick = (e: any) => {
    console.log('click ', e);
  };

  return (
    <MobileCategoriesStyle>
      <Menu
        onClick={handleClick}
        mode="inline"
      >
         <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Categories">
          <Menu.Item key="0">Beauty</Menu.Item>
          <Menu.Item key="1">Phones &amp; Tablet</Menu.Item>
          <Menu.Item key="2">Electronics</Menu.Item>
          <Menu.Item key="3">Gaming</Menu.Item>
          <Menu.Item key="4">Computing</Menu.Item>
          <Menu.Item key="5">Home &amp; Office</Menu.Item>
          <Menu.Item key="6">Automobile</Menu.Item>
          <Menu.Item key="7">Others</Menu.Item>
        </SubMenu>
      </Menu>
    </MobileCategoriesStyle>
  )
}

export default MobileCategories;
