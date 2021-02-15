import React from 'react';
import { Col, Card } from 'antd';
import MobileCategories from './MobileCategories';
import LeftBarStyles from './styles';

const LeftBar = () => {
  return (
    <Col xs={{ span: 24 }} lg={{ span: 4 }}>
      <LeftBarStyles>
        <Card title="Categories" bordered={false}>
          <p className="link">Beauty</p>
          <p className="link">Phones &amp; Tablet</p>
          <p className="link">Electronics</p>
          <p className="link">Gaming</p>
          <p className="link">Computing</p>
          <p className="link">Home &amp; Office</p>
          <p className="link">Automobile</p>
          <p className="link">others</p>
        </Card>
      </LeftBarStyles>
      <MobileCategories />
    </Col>
  )
}

export default LeftBar;

