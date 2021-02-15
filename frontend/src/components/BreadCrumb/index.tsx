import { Breadcrumb, Col, Row } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

export const BreadCrumb = () => {
  
  return (
    <Row className="container-fluid mt-8 mb-1">
      <Col span={24}>
        <Breadcrumb>
          <Breadcrumb.Item href="">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <UserOutlined />
            <span>Application List</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Application</Breadcrumb.Item>
        </Breadcrumb>
      </Col>
    </Row>
  )
}
