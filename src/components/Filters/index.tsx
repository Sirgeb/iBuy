import React from 'react'
import { Affix, Card, Select, Typography } from 'antd';
import FiltersStyle from './styles';

const { Option } = Select;
const { Text } = Typography;

export const Filters = () => {
  function handleChange(value:any) {
    console.log(`selected ${value}`);
  }

  return (
    <FiltersStyle className="mb-1">
      <Affix offsetTop={50} className="affix">
        <Card bordered={false}>
          <Text>Filter By Brand</Text>
          <Select defaultValue="Any" onChange={handleChange} className="select-box">
            <Option value="Adidas">Adidas</Option>
            <Option value="Nike">Nike</Option>
            <Option value="Fila">Fila</Option>
            <Option value="Reebok">Reebok</Option>
            <Option value="Any">Any</Option>
          </Select>
        </Card>

        <Card bordered={false}>
          <Text>Filter By Category</Text>
          <Select defaultValue="Any" onChange={handleChange} className="select-box">
            <Option value="T-shirt">T-shirt</Option>
            <Option value="Trouser">Trouser</Option>
            <Option value="Canvas">Canvas</Option>
            <Option value="Shoe">Shoe</Option>
            <Option value="Any">Any</Option>
          </Select>
        </Card>

        <Card bordered={false}>
          <Text>Filter By Price</Text>
          <Select defaultValue="Any" onChange={handleChange} className="select-box">
            <Option value="Lowest to highest">Lowest to highest</Option>
            <Option value="Highest to lowest">Highest to lowest</Option>
            <Option value="Any">Any</Option>
          </Select>
        </Card>

        <Card bordered={false}>
          <Text>Filter By Discount</Text>
          <Select defaultValue="Any" onChange={handleChange} className="select-box">
            <Option value="Highest">Highest</Option>
            <Option value="Lowest">Lowest</Option>
            <Option value="Any">Any</Option>
          </Select>
        </Card>
      </Affix>
    </FiltersStyle>
  )
}

