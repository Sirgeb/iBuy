import React from 'react';
import { Row } from 'antd';
import HeroStyles from './styles';
import LeftBar from './LeftBar';
import Slider from './Slider';
import RightBar from './RightBar';
import Footer from './Footer';

export const Hero = () => {
  return (
    <HeroStyles className="container-fluid">
      <Row gutter={[16, 16]}>
        <LeftBar />
        <Slider />
        <RightBar />
      </Row>
      <Footer />
    </HeroStyles>
  )
}
