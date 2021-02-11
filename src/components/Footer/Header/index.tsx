import React from 'react';
import { Card, Col, Row } from 'antd';
import HeaderStyles from './styles';
import PaymentMethods from '../../../assets/transactions/payment_methods.png';

const Header = () => {
  return (
    <Row>
      <Col xs={{ span: 24 }}>
        <Card bordered={false} className="center">
          <HeaderStyles>
            <img src={PaymentMethods} alt="payment methods" />
          </HeaderStyles>
        </Card>
      </Col>
    </Row>
  )
}

export default Header;
