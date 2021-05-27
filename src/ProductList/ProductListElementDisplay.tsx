import React from 'react';
import { usePreloadedQuery } from 'react-relay';
import { productDetailCategoryNameAndCommonProductQuery } from '../ProductDetail/ProductDetail';
import {
    ProductDetailCategoryNameAndCommonProductQuery,
    ProductDetailCategoryNameAndCommonProductQueryResponse
} from '../ProductDetail/__generated__/ProductDetailCategoryNameAndCommonProductQuery.graphql';
import ProductListElement from './ProductListElement';

const ProductListDisplay = (props: any) => {
    const { productByProdId }: ProductDetailCategoryNameAndCommonProductQueryResponse =
        usePreloadedQuery<ProductDetailCategoryNameAndCommonProductQuery>(productDetailCategoryNameAndCommonProductQuery, props.queryReference);

    return <ProductListElement product={productByProdId} />;
};

export default ProductListDisplay;
