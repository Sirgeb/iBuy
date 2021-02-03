import React from 'react'
import { Anchor, Badge, Drawer, Space } from 'antd';
const { Link } = Anchor;

type Props = {
  visible: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<Props> = ({ visible, onClose }) => {
  const [targetOffset, setTargetOffset] = React.useState<number | undefined>(undefined);

  const isLoggedIn = true;

  React.useEffect(() => {
    setTargetOffset(window.innerHeight / 2);
  }, []);

  return (
    <Drawer
      placement="right"
      closable={false}
      onClose={onClose}
      visible={visible}
    >
      <Anchor targetOffset={targetOffset}>
        <div style={{ display: "flex", flexDirection: "row"}}>
          <Space size="small">
            <Link href="#cart" title="Cart" />
            <Badge count={2} showZero />
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
          <Link href="#login" title="Login" />
        )
      }
    </Anchor>
    </Drawer>
  )
}

export default MobileMenu;
