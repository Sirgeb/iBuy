import { Card, Col, Row } from 'antd';
import FooterStyles from './styles';
import Reebok from '../../../assets/brands/reebok.jpg';
import Fila from '../../../assets/brands/fila.jpg';
import Nike from '../../../assets/brands/nike.jpg';
import Adidas from '../../../assets/brands/adidas.jpg';

interface Brand {
  name: string;
  image: string;
}
const brands: Brand[] = [
  { name: "Reebok", image: Reebok },
  { name: "Fila", image: Fila },
  { name: "Nike", image: Nike },
  { name: "Adidas", image: Adidas }
]

const Footer = () => {
  return (
    <FooterStyles>
      <Row gutter={16}>
        {
          brands.map((brand, index) => (
            <Col span={6} key={index}>
              <Card bordered={false}  className="card center" onClick={() => alert(brand.name)}>
                <img src={brand.image} alt={brand.name} className="brandImage" />
              </Card>
            </Col>
          ))
        }
      </Row>
    </FooterStyles>
  )
}

export default Footer
