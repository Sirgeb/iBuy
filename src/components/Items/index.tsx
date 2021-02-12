import React from 'react';
import { Col, List, Row } from 'antd';
import { Item, Filters } from '..';
import one from '../../assets/women/1.jpg';

export const Items = () => {
  const items = [{},{},{},{},{},{}]
  return (
    <Row className="container-fluid mt-8">
      <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 6 }}>
        <Filters/>
      </Col>
      <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 18 }}>
        <List 
          grid={{
            gutter: 8,
            xs: 1,
            sm: 2,
            md: 2,
            lg: 3,
            xl: 3,
            xxl: 3
          }}
          dataSource={items}
          renderItem={item => (
            <List.Item>
              <Item image={one} showTimer={false} />
            </List.Item>
          )}
        />
      </Col>
    </Row>
  )
}

