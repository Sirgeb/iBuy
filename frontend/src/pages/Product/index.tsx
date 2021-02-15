import React from 'react'
import { Button, Col, Row, Typography, Divider } from 'antd';
import { HeartOutlined, MessageOutlined } from '@ant-design/icons';
import Tilt from 'react-parallax-tilt';
import { Container, Promo, BreadCrumb } from '../../components';
import ProductStyles, { SellerInfoStyles } from './styles';
import one from '../../assets/men/1.jpg';

const { Text, Title } = Typography;

export const Product = () => {
  return (
    <Container title="iBuy | Products">
      <BreadCrumb />
      <ProductStyles 
        className="container-fluid"
      >
        <Row className="row">
          <Col span={12}>
            <div className="product-image-container">
              <Tilt>
                <img src={one} alt="image" className="product-image" />
              </Tilt>
            </div>
          </Col>
          <Col span={12}>
            <div className="product-info">
              <Title level={2}>Slim T-Shirt For Men</Title>
              <Divider />
              <div className="single-product-price"><span>$100.00</span> <span>Save $20</span> <s>$125</s></div>
              <Divider />
              <Text>25% off + Free Shipping</Text>
              <Divider />
              <div className="quantity">
                <Text className="txt">Quantity:</Text>
                <div className="quantity-btn">
                  <Button>-</Button>
                  <Button className="txt-btn">5</Button>
                  <Button>+</Button>
                </div> 
              </div>
              <Divider />
              <div className="action-btn">
                <Button className="buy-btn">Buy Now</Button>
                <div>
                  <Button 
                    size="large" 
                    type="dashed" 
                    shape="circle" 
                    icon={<HeartOutlined />} 
                  />&nbsp;<Text>Add To Wishlist</Text>
                </div>
                <div>
                  <Button 
                    size="large" 
                    type="dashed" 
                    shape="circle" 
                    icon={<MessageOutlined />} 
                  />&nbsp;<Text>Message Seller</Text>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </ProductStyles>
      <SellerInfoStyles 
        className="mt-2 mb-16 container-fluid"
      >
        <Row>
          <Col span={24}>
            <div className="mt-2 mb-2 center">
              <Text>Sold by <strong>G-Ventures</strong>. 3 Slim T-Shirt For Men is a product of <strong>Adidas</strong>.</Text>
            </div>
          </Col>
        </Row>
      </SellerInfoStyles>
        <div className="mb-2">
          <Row>
            <Col span={24}>
              <Promo 
                headerText={{ 
                  title: 'Other Items You Might Like',
                  subTitle: 'From This Seller'
                }}
                showTimer={false}
              />
            </Col>
          </Row>
        </div>
    </Container>
  )
}
