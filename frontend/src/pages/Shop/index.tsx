import React from 'react';
import { Items, Container, BreadCrumb, ItemsPagination } from '../../components';

export const Shop = () => {
  return (
    <Container>
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
