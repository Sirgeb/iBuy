import React from 'react';
import { Card, Col, Row } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import Header from './Header';
import FooterStyles from './styles';

export const Footer = () => {
  return (
    <FooterStyles>
      <Header />
      <Row>
        <Col span={24}>
          <Card bordered={false} className="center">
            <div>
              © Copyright {new Date().getFullYear()} iBuy  |  Made with <HeartFilled style={{ color: 'red' }} /> by Sirgeb
            </div>
          </Card>
        </Col>
      </Row>
    </FooterStyles>
  )
}
