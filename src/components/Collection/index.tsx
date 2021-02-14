import React from 'react';
import CollectionStyles from './styles';
import one from '../../assets/men/1.jpg';
import two from '../../assets/men/2.jpg';
import three from '../../assets/men/3.jpg';
import four from '../../assets/men/4.jpg';
import { Button, Col, Row } from 'antd';
import { Item } from '..';

export const Collection = () => {
  const items = [one, two, three, four];

  return (
    <CollectionStyles className="container-fluid">
      <Row gutter={[16, 16]}>
        {
          items.map((item, index) => (
            <Col key={index} xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
              <Item image={item} showTimer={false}/>
            </Col>
          ))
        }
      </Row>
      <div className="center">
        <Button type="primary">Show All</Button>
      </div>
    </CollectionStyles>
  )
}

