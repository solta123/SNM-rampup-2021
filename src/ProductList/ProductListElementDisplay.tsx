import React from 'react';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { productDetailCategoryNameAndCommonProductQuery } from '../ProductDetail/ProductDetail';
import {
    ProductDetailCategoryNameAndCommonProductQuery,
    ProductDetailCategoryNameAndCommonProductQueryResponse
} from '../ProductDetail/__generated__/ProductDetailCategoryNameAndCommonProductQuery.graphql';
import ProductListElement from './ProductListElement';

type Props = {
    queryReference: PreloadedQuery<ProductDetailCategoryNameAndCommonProductQuery>
};

const ProductListDisplay = ({ queryReference }: Props) => {
    const { productByProdId }: ProductDetailCategoryNameAndCommonProductQueryResponse =
        usePreloadedQuery<ProductDetailCategoryNameAndCommonProductQuery>(productDetailCategoryNameAndCommonProductQuery, queryReference);

    return <ProductListElement product={productByProdId} />;
};

export default ProductListDisplay;
