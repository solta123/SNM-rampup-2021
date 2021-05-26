import styled from '@emotion/styled';
import React from 'react';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { productQuery } from '../ProductListQueryFetcher/ProductListQueryFetcher';
import {
  ProductListQueryFetcherProductQuery,
  ProductListQueryFetcherProductQueryResponse
} from '../ProductListQueryFetcher/__generated__/ProductListQueryFetcherProductQuery.graphql';
import ProductListElement from './ProductListElement';

export type ProductListQueryFetcherProductQueryResponseNode = {
  readonly price: unknown;
  readonly title: string;
  readonly actor: string;
  readonly prodId: number;
} | null;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ProductList = (props: { queryReference: PreloadedQuery<ProductListQueryFetcherProductQuery, Record<string, unknown>> }) => {
  const products: ProductListQueryFetcherProductQueryResponse =
    usePreloadedQuery<ProductListQueryFetcherProductQuery>(productQuery, props.queryReference);

  return (
    <ul>
      <h1>List 2</h1>
      <ListContainer>
        {products?.allProducts?.nodes.map((product: ProductListQueryFetcherProductQueryResponseNode) => (
          <ProductListElement product={product} />
        ))}
      </ListContainer>
    </ul>
  );
};

export default ProductList;
