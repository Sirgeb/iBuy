import React from 'react';
import { Card, Divider, Button, Progress, Tooltip } from 'antd';
import Meta from 'antd/lib/card/Meta';
import ItemStyles from './styles';
import { HeartOutlined } from '@ant-design/icons';
import { Timer } from '..';

type Props = {
  image: string;
  showTimer: boolean;
}

export const Item = ({ image, showTimer }: Props) => {

  return (
    <ItemStyles>
      <Card
        hoverable
        cover={
          <div className="cover">
            <img alt="item name" src={image} className="card-image"/>
          </div>
        }
      >
        <Meta title="T Shirt 501"/>
        <Divider className="divider" />
        <div className="card-info">
          <div className="price-container">
            <div className="price">
              <span className="amount">$350</span>
            </div>
              <span className="save">Save $20</span>
            <div className="original-price">
              $300
            </div>
          </div>
          <Divider className="divider" />
          {
            showTimer && (
              <>
                <div className="count-down"><span>Time Remaining for this offer</span><Timer /></div>
                <Divider className="divider" />
              </>
            )
          }
          <div className="sold">
            <span>Sold</span><Progress percent={30} />
          </div>
          <Button className="card-btn">Add To Cart</Button>
        </div>
        <div className="discount-percent">75% OFF</div>
        <div className="wishlist">
          <Tooltip title="Add To Wishlist">
            <Button type="dashed" shape="circle" icon={<HeartOutlined />} />
          </Tooltip>
        </div>
      </Card>
    </ItemStyles>
  )
}

export default Card;
