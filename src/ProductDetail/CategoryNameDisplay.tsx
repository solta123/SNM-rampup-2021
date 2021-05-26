import React from 'react';
import { usePreloadedQuery } from 'react-relay';
import { productDetailCategoryNameAndCommonProductQuery } from './ProductDetail';
import type {
    ProductDetailCategoryNameAndCommonProductQuery,
    ProductDetailCategoryNameAndCommonProductQueryResponse
} from './__generated__/ProductDetailCategoryNameAndCommonProductQuery.graphql';

const CategoryNameDisplay = (props: any) => {
    const preloadedQuery: ProductDetailCategoryNameAndCommonProductQueryResponse =
        usePreloadedQuery<ProductDetailCategoryNameAndCommonProductQuery>(productDetailCategoryNameAndCommonProductQuery, props.queryReference);

    return <b>{ preloadedQuery.categoryByCategory?.categoryname }</b>;
};

export default CategoryNameDisplay;
