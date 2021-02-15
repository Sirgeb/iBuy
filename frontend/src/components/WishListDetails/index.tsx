import React from 'react'
import { Affix, Avatar, Card, Typography, Divider, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import WishListDetailsStyles from './styles';

const { Text } = Typography;

export const WishListDetails = () => {
  return (
    <WishListDetailsStyles className="mb-1">
      <Affix offsetTop={50} className="affix">
        <Card bordered={false}>
          <div className="details-container">
            <Avatar size={64} icon={<UserOutlined />} />
            <Divider className="divider" />
            <Text>Hi - Gabito</Text>
            <Divider className="divider" />
            <Text>You have 8 items in your wishlist</Text>
          </div>
        </Card>
      </Affix>
    </WishListDetailsStyles>
  )
}
