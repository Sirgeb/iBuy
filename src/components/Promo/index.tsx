import React from 'react';
import { Col, Row } from 'antd';
import PromoStyles from './styles';
import one from '../../assets/women/1.jpg';
import two from '../../assets/women/2.jpg';
import three from '../../assets/women/3.jpg';
import four from '../../assets/women/4.jpg';

import { Item } from '..';

export const Promo = () => {
  const items = [one, two, three, four];

  return (
    <PromoStyles className="container-fluid">
      <div className="title-holder">
        <h2>Latest Promo Of The Week</h2>
        <p>Up to 70% off on sales</p>
      </div>
      <Row gutter={[16, 16]}>
        {
          items.map((item, index) => (
            <Col key={index} xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
              <Item image={item} showTimer={true}/>
            </Col>
          ))
        }
      </Row>
    </PromoStyles>
  )
}

