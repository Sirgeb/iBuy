import React from 'react'
import { Table, Tag, Space } from 'antd';
import { Col, Row } from 'antd'
import { BreadCrumb, Container } from '../../components'

export const Cart = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      //@ts-ignore
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      //@ts-ignore
      render: tags => (
        <>
          {
          //@ts-ignore
          tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  return (
    <Container title="iBuy | Shopping Cart">
      <BreadCrumb />
      <Row className="container-fluid min-height">
        <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 18 }}>
          <Table columns={columns} dataSource={data} />
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 6 }}>
          check out info stays here
        </Col>
      </Row>
    </Container>
  )
}
