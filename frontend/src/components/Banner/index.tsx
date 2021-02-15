import { Card, Col, Row } from 'antd';
import BannerStyles from './styles';

interface Props {
  image: string;
}

export const Banner: React.FC<Props> = ({ image }) => {
  return (
    <BannerStyles>
      <Row>
        <Col xs={{ span: 24 }}>
          <Card bordered={false} className="card center" onClick={() => alert("Banner")}>
            <img src={image} alt="advert" style={{ width: '100%'}}/>
          </Card>
        </Col>
      </Row>
    </BannerStyles>
  )
}