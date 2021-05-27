/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { Link } from 'found';
import styled from '@emotion/styled';
import { ProductListQueryFetcherProductQueryResponseNode } from './ProductList';

// interface ProductListElementInterface {
//     prodId: number,
//     actor: string,
//     price: number,
//     title: string
// };

const ListElement = styled.div`
  border: 1px solid gray;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 1rem;
  background-color: #eeeeee;
  transition: 0.2s;
  color: black;
  text-decoration: none !important;
  list-style-type: none;
  &:hover {
    box-shadow: 0 0 1px 4px lightgray;
  }
`;

type Props = {
  product: ProductListQueryFetcherProductQueryResponseNode
};

const ProductListElement = ({ product }: Props) => {
  return <Link to={'/product/' + product?.prodId}>
    <ListElement key={product?.prodId} id={product?.prodId.toString()}>
      <h3 css={{ marginTop: '0.5em', '&:link': { textDecoration: 'none' } }}>{product?.title} for ${product?.price}</h3>
      <div>{product?.actor}</div>
    </ListElement>
  </Link>
};

export default ProductListElement;
