import React from 'react';
import { Card, Col, Row } from 'antd';
import PaymentMethods from '../../../assets/transactions/payment_methods.png';

const Header = () => {
  return (
    <Row>
      <Col span={24}>
        <Card bordered={false} className="center">
          <img src={PaymentMethods} alt="payment methods"/>
        </Card>
      </Col>
    </Row>
  )
}

export default Header;
