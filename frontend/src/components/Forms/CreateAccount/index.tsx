import React, { Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Input, Button, Select, Col, Row } from 'antd';
import { LockOutlined, UserOutlined, RedEnvelopeOutlined } from '@ant-design/icons';
import CreateAccountStyles from './styles';
import { BreadCrumb } from '../..';

const { Option } = Select;

export const CreateAccount = () => {
  const history = useHistory();

  return (
    <Fragment>
      <BreadCrumb />
      <CreateAccountStyles className="container-fluid">
        <Row>
          <Col span={12}>
            <div className="image-cover">
              <div className="image" />
            </div>
          </Col>
          <Col span={12}>
            <div className="form">
            <div className="title-holder">
              <h2>Create your account!</h2>
              <p>to explore even more...</p>
            </div>
            <Form name="control-hooks" className="mx-user-account">
              <Form.Item name="username">
                <Input 
                  prefix={<UserOutlined className="site-form-item-icon" />} 
                  placeholder="Username" 
                />
              </Form.Item>
              <Form.Item name="email">
                <Input 
                  prefix={<RedEnvelopeOutlined className="site-form-item-icon" />} 
                  placeholder="Email" 
                />
              </Form.Item>
              <Form.Item name="password">
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
              <Select 
                defaultValue="buyer" 
                // onChange={handleChange}
              >
                <Option value="buyer">Buyer</Option>
                <Option value="seller">Seller</Option>
                <Option value="delivery">Delivery</Option>
              </Select>
              </Form.Item>
              <Form.Item>
                <Link to="/forgot password">
                  Forgot password
                </Link>
              </Form.Item>
            </Form>
            <div className="center mx-user-account">
              <Button htmlType="button" onClick={() => history.push('/login')}>
                Login
              </Button>
              <Button type="primary" htmlType="submit">
                Create Account
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      </CreateAccountStyles>
    </Fragment>
  )
}
