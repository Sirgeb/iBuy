import { Col, Carousel } from 'antd';
import SliderStyles from './styles';
import MenClothing from '../../../assets/slider/men-clothing.jpg';
import WomenClothing from '../../../assets/slider/women-clothing.jpg';
import KidsClothing from '../../../assets/slider/kids-clothing.jpg';

const images = [
  { name: "men-clothing", image: MenClothing }, 
  { name: "women-clothing", image: WomenClothing },
  { name: "kids-clothing", image: KidsClothing }
];

const Slider = () => {

  return (
    <Col xs={{ span: 24 }} lg={{ span: 16 }}>
      <SliderStyles>
        <Carousel autoplay>
          {
            images.map(({ image, name }, index) => (
              <div className="contentStyle" key={index}>
                <img 
                  src={image} 
                  alt="featured" 
                  className="sliderImage" 
                  onClick={() => alert(name)}
                />
              </div>
            ))
          }
        </Carousel>
      </SliderStyles>
    </Col>
  )
}

export default Slider;
