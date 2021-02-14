import React from 'react';
import { Button, Col, Row } from 'antd';
import PromoStyles from './styles';
import one from '../../assets/women/1.jpg';
import two from '../../assets/women/2.jpg';
import three from '../../assets/women/3.jpg';
import four from '../../assets/women/4.jpg';

import { Item, Title } from '..';

type Props = {
  headerText: {
    title: string;
    subTitle: string;
  },
  showTimer: boolean;
}
export const Promo = ({
  headerText,
  showTimer
}: Props) => {
  const items = [one, two, three, four];

  return (
    <PromoStyles className="container-fluid">
      <Title 
        title={headerText.title}
        subTitle={headerText.subTitle}
      />
      <Row gutter={[16, 16]}>
        {
          items.map((item, index) => (
            <Col key={index} xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
              <Item image={item} showTimer={showTimer}/>
            </Col>
          ))
        }
      </Row>
      <div className="center">
        <Button type="primary">Show All</Button>
      </div>
    </PromoStyles>
  )
}

