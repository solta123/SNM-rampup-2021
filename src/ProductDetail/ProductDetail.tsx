/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { graphql } from 'babel-plugin-relay/macro';
import React, { useEffect } from 'react';
import { usePreloadedQuery, useQueryLoader } from 'react-relay';
import ProductListElement from '../ProductList/ProductListElement';
import CategoryNameDisplay from './CategoryNameDisplay';
import { ProductByIdQuery } from './ProductDetailPage';
import { ProductDetailCategoryNameAndCommonProductQuery } from './__generated__/ProductDetailCategoryNameAndCommonProductQuery.graphql';
import { ProductDetailPageQuery, ProductDetailPageQueryResponse } from './__generated__/ProductDetailPageQuery.graphql';

export const productDetailCategoryNameAndCommonProductQuery = graphql`
    query ProductDetailCategoryNameAndCommonProductQuery($category: Int!, $prodId: Int!) {
        categoryByCategory(category: $category) {
            categoryname
        }
        productByProdId(prodId: $prodId) {
            prodId
            title
            price
            actor
        }
    }
`;

const SpecsContainer = styled.ul`
    border: 1px solid black;
    padding: 0.5rem;
`;

const ProductDetail = (props: any) => {
    const { productByProdId }: ProductDetailPageQueryResponse =
        usePreloadedQuery<ProductDetailPageQuery>(ProductByIdQuery, props.queryReference);
    const [queryReference, loadQuery, disposeQuery] =
        useQueryLoader<ProductDetailCategoryNameAndCommonProductQuery>(productDetailCategoryNameAndCommonProductQuery);

    useEffect(() => {
        if (productByProdId) {
            loadQuery({
                category: productByProdId.category,
                prodId: productByProdId.commonProdId
            });
        }
        return () => disposeQuery();
    }, [disposeQuery, loadQuery, productByProdId]);

    return <div>
        <h1>{productByProdId?.title}</h1>
        <h3>Only for ${productByProdId?.price}</h3>
        <div>
            <button>Purchase</button>
        </div>
        <h4>Specs:</h4>
        <SpecsContainer>
            <li>Main actor: <b>{productByProdId?.actor}</b></li>
            {queryReference && <li>Category: <CategoryNameDisplay queryReference={queryReference} /></li>}
        </SpecsContainer>

        <h3>You may also like:</h3>
        <div css={{ display: 'flex' }}>
            <ProductListElement queryReference={queryReference} />
        </div>
    </div >
};

export default ProductDetail;
