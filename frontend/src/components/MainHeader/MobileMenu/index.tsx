import React from 'react'
import { Anchor, Badge, Button, Drawer, Input, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import MobileMenuStyles from './styles';

const { Link } = Anchor;

type Props = {
  visible: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<Props> = ({ visible, onClose }) => {
  const [targetOffset, setTargetOffset] = React.useState<number | undefined>(undefined);
  const isLoggedIn = false;

  React.useEffect(() => {
    setTargetOffset(window.innerHeight / 2);
  }, []);

  return (
    <Drawer
      placement="right"
      closable={true}
      onClose={onClose}
      visible={visible}
      width={300}
    >
      <MobileMenuStyles>
        <div className="search-bar-mobile">
          <Input
            placeholder="Search products, brands, and categories" 
            className="input"
          />
          <Button type="primary"><SearchOutlined /></Button>
        </div>
        <Anchor targetOffset={targetOffset}>
          <div className="horizontal">
            <Space size="small">
              <Link href="#cart" title="Cart" />
              <Badge count={2} showZero />
            </Space>
          </div>
          <div className="horizontal">
            <Space size="small">
              <Link href="#wishlist" title="Wishlist" />
              <Badge count={0} showZero />
            </Space>
          </div>
          <Link href="#help" title="Help" />
          {
            isLoggedIn ? (
              <Link href="#API" title="Account">
                <Link href="#profile" title="Profile" />
                <Link href="#logout" title="Log out" />
              </Link>
            ) : (
              <Link href="login" title="Login" />
            )
          }
        </Anchor>
      </MobileMenuStyles>
    </Drawer>
  )
}

export default MobileMenu;
