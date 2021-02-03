import { Card, Col } from 'antd';
import { HomeOutlined, QuestionCircleOutlined, GiftOutlined } from '@ant-design/icons';
import RightBarStyles from './styles';

const RightBar = () => {
  return (
    <Col xs={{ span: 24 }} lg={{ span: 4 }}>
      <RightBarStyles>
        <Card>
          <div className="center box">
            <HomeOutlined className="icon" />
            <span>Home Delivery</span>
          </div>
        </Card>
        <Card>
          <div className="center box">
            <QuestionCircleOutlined className="icon"/>
            <span>Need Help</span>
          </div>
        </Card>
        <Card>
          <div className="center box">
            <GiftOutlined className="icon"/>
            <span>Track Your Order</span>
          </div>
        </Card>
      </RightBarStyles>
    </Col>
  )
}

export default RightBar
