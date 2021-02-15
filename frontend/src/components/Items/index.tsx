import React from 'react';
import { useLocation } from 'react-router-dom';
import { Col, List, Row } from 'antd';
import { Item, Filters, ShopDetails, WishListDetails } from '..';
import one from '../../assets/women/1.jpg';

export const Items = () => {
  const items = [{},{},{},{},{},{}];
  const location = useLocation();
  const { pathname } = location;

  return (
    <Row className="container-fluid">
      <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 6 }}>
        {
          pathname === '/shop' ? (
            <ShopDetails />
          ) : 
          pathname === '/wishlist' ? (
            <WishListDetails />
          ) : (
            <Filters/>
          )
        }
      </Col>
      <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 18 }}>
        <List 
          grid={{
            gutter: 8,
            xs: 1,
            sm: 2,
            md: 2,
            lg: 3,
            xl: 3,
            xxl: 3
          }}
          dataSource={items}
          renderItem={item => (
            <List.Item>
              <Item image={one} showTimer={false} />
            </List.Item>
          )}
        />
      </Col>
    </Row>
  )
}

