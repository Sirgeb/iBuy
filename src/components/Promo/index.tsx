import React from 'react';
import { Col, Row } from 'antd';
import PromoStyles from './styles';
import one from '../../assets/women/1.jpg';
import two from '../../assets/women/2.jpg';
import three from '../../assets/women/3.jpg';
import four from '../../assets/women/4.jpg';

import { Item, Title } from '..';

export const Promo = () => {
  const items = [one, two, three, four];

  return (
    <PromoStyles className="container-fluid">
      <Title 
        title="Latest Promo Of The Week"
        subTitle="Up to 70% off on sales"
      />
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

