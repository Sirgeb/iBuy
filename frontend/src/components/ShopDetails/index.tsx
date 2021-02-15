import React from 'react'
import { Affix, Avatar, Card, Typography, Divider, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import ShopStyles from './styles';

const { Text } = Typography;

export const ShopDetails = () => {
  return (
    <ShopStyles className="mb-1">
      <Affix offsetTop={50} className="affix">
        <Card bordered={false}>
          <div className="details-container">
            <Avatar size={64} icon={<UserOutlined />} />
            <Divider className="divider" />
            <Text>Ahamz Clothinz</Text>
            <Divider className="divider" />
            <Text>+234806746736</Text>
            <Divider className="divider" />
            <Text>seller@yahoo.com</Text>
            <Divider className="divider" />
            <Button className="card-btn">Message Seller</Button>
          </div>
        </Card>
      </Affix>
    </ShopStyles>
  )
}
