import React from 'react';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { productDetailCategoryNameAndCommonProductQuery } from './ProductDetail';
import type {
    ProductDetailCategoryNameAndCommonProductQuery,
    ProductDetailCategoryNameAndCommonProductQueryResponse
} from './__generated__/ProductDetailCategoryNameAndCommonProductQuery.graphql';

type Props = {
    queryReference: PreloadedQuery<ProductDetailCategoryNameAndCommonProductQuery>
};

const CategoryNameDisplay = ({ queryReference }: Props) => {
    const preloadedQuery: ProductDetailCategoryNameAndCommonProductQueryResponse =
        usePreloadedQuery<ProductDetailCategoryNameAndCommonProductQuery>(productDetailCategoryNameAndCommonProductQuery, queryReference);

    return <b>{preloadedQuery.categoryByCategory?.categoryname}</b>;
};

export default CategoryNameDisplay;
