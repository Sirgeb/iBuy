import React from 'react';
import { MainHeader, Footer } from '../';
import { Layout } from 'antd';
import ContainerStyles from './styles';

const { Header, Content } = Layout;

type Props = {
  title?: string
}

export const Container: React.FC<Props> = ({ 
  children,
  title="iBuy | The best market place in the world"
}) => {
  return (
    <Layout>
      <ContainerStyles>
        <Header id="header">
          <MainHeader />
        </Header>
        <Content>
          { children }
        </Content>
        <Footer />
      </ContainerStyles>
    </Layout>
  )
}
