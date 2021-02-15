import React from 'react';
import { Container, Items, ItemsPagination, BreadCrumb } from '../../components';

export const Products = () => {
  return (
    <Container title="iBuy | Products">
      <BreadCrumb />
      <Items />
      <ItemsPagination
        total={16}
        page={1}
        limit={8}
        setPage={() => null}
      />
    </Container>
  )
}
