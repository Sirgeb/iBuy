import { Card, Col, Row } from 'antd';
import BannerStyles from './styles';

interface Props {
  image: string;
}

export const Banner: React.FC<Props> = ({ image }) => {
  return (
    <BannerStyles>
      <Row  gutter={16}>
        <Col span={24}>
          <Card bordered={false}  className="card center" onClick={() => alert("Banner")}>
            <img src={image} alt="advert"/>
          </Card>
        </Col>
      </Row>
    </BannerStyles>
  )
}