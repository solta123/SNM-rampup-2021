import React, { useEffect } from 'react';
import { useQueryLoader } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import { ProductDetailPageQuery } from './__generated__/ProductDetailPageQuery.graphql';
import ProductDetail from './ProductDetail';

export const ProductByIdQuery = graphql`
    query ProductDetailPageQuery($prodId: Int!) {
        productByProdId(prodId: $prodId) {
            category
            commonProdId
            nodeId
            price
            prodId
            special
            title
            actor
        }
    }
`;

const ProductDetailPage = ({ match }: any) => {
    const [queryReference, loadQuery, disposeQuery] = useQueryLoader<ProductDetailPageQuery>(ProductByIdQuery);

    useEffect(() => {
        loadQuery({ prodId: parseInt(match.params.prodId, 10) });
        return () => disposeQuery();
    }, [disposeQuery, loadQuery, match.params.prodId]);

    if (queryReference) {
        return <ProductDetail queryReference={queryReference} />
    }
    return <div>Loading product...</div>
};

export default ProductDetailPage;
