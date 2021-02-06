import React from 'react';
import { Card, Col, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import FeaturedStyles from './styles';
import Jeans from '../../assets/deals/jeans.jpg';
import Kids from '../../assets/deals/kids.jpg';
import Look from '../../assets/deals/look.jpg';
import Sunglasses from '../../assets/deals/sunglasses.jpg';

export const Featured = () => {
  return (
    <FeaturedStyles className="container-fluid">
      <div className="title-holder">
        <h2>Deals of the week</h2>
        <p>Up to 60% off on sales</p>
      </div>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card
            hoverable
            cover={<img alt="example" src={Jeans} className="card-image"/>}
            className="card"
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
    </FeaturedStyles>
  )
}

