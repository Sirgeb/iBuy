import React from 'react';
import { Container, Hero, Featured, Banner, Collection, Footer } from '../../components';
import ClothingMW from '../../assets/banners/clothing-MW.png';
import MenFootWear from '../../assets/banners/men-footwear.jpg';
import MenWristWatch from '../../assets/banners/men-wristwatch.jpg';

export const Home: React.FC = () => {
  return (
    <Container title="iBuy | Home">
      <Hero />
      <Featured />
      <Banner image={ClothingMW} />
      <Collection />
      <Banner image={ClothingMW} />
      <Collection />
      <Banner image={MenWristWatch} />
      <Collection />
      <Banner image={MenFootWear} />
      <Collection />
      <Footer />
    </Container>
  )
}
