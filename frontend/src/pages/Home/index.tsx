import React from 'react';
import { Container, Hero, Promo, Banner, Collection } from '../../components';
import ClothingMW from '../../assets/banners/clothing-MW.png';
import MenFootWear from '../../assets/banners/men-footwear.jpg';
import MenWristWatch from '../../assets/banners/men-wristwatch.jpg';

export const Home: React.FC = () => {
  return (
    <Container title="iBuy | Home">
      <Hero />
      <Promo 
        headerText={{
          title: "Latest Promo Of The Week",
          subTitle: "Up to 70% off on sales"
        }}
        showTimer={true}
      />
      <Banner image={ClothingMW} />
      <Collection />
      <Banner image={ClothingMW} />
      <Collection />
      <Banner image={MenWristWatch} />
      <Collection />
      <Banner image={MenFootWear} />
      <Collection />
    </Container>
  )
}
