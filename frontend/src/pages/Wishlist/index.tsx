import React from 'react'
import { BreadCrumb, Container, Items, ItemsPagination } from '../../components'

export const Wishlist = () => {
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
