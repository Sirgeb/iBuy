import React from 'react';
import { Container, Items, ItemsPagination, Filters, Footer } from '../../components';

export const Products = () => {
  return (
    <Container title="iBuy | Products">
      <Items />
      <ItemsPagination
        total={16}
        page={1}
        limit={8}
        setPage={() => null}
      />
      <Footer />
    </Container>
  )
}
