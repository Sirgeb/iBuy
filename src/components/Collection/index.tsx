import React from 'react';
import { Card, Col, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import CollectionStyles from './styles';
import Jeans from '../../assets/deals/jeans.jpg';
import Kids from '../../assets/deals/kids.jpg';
import Look from '../../assets/deals/look.jpg';
import Sunglasses from '../../assets/deals/sunglasses.jpg';

export const Collection = () => {
  return (
    <CollectionStyles className="container-fluid">
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card
            hoverable
            cover={<img alt="example" src={Jeans} className="card-image"/>}
            className="dealsCard"
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            cover={<img alt="example" src={Kids} className="card-image"/>}
            className="dealsCard"
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            cover={<img alt="example" src={Look} className="card-image" />}
            className="dealsCard"
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            cover={<img alt="example" src={Sunglasses} className="card-image"/>}
            className="dealsCard"
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
      </Row>
    </CollectionStyles>
  )
}

