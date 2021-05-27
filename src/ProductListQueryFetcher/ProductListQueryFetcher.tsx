import React, { useEffect } from 'react';
import { useQueryLoader } from 'react-relay/hooks';
import { graphql } from 'babel-plugin-relay/macro';
import ProductList from '../ProductList/ProductList';
import { ProductListQueryFetcherProductQuery } from './__generated__/ProductListQueryFetcherProductQuery.graphql';

export const productQuery = graphql`
  query ProductListQueryFetcherProductQuery {
    allProducts(orderBy: PROD_ID_DESC, first: 20) {
      nodes {
        price
        title
        actor
        prodId
      }
    }
  }
`;

const ProductListQueryFetcher = () => {
  const [queryReference, loadQuery, disposeQuery] = useQueryLoader<ProductListQueryFetcherProductQuery>(productQuery);

  useEffect(() => {
    loadQuery({});
    return () => disposeQuery();
  }, [disposeQuery, loadQuery]);

  if (!queryReference) {
    return <div>Loading products...</div>;
  }
  return <div>
    <h1>List 2</h1>
    <ProductList queryReference={queryReference} />
  </div>;
};

export default ProductListQueryFetcher;
