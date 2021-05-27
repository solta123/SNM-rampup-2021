import React from 'react';
import { createBrowserRouter, createRender, makeRouteConfig, Redirect, Route } from 'found';
import AddProductForm from '../AddProductForm/AddProductForm';
import App from '../App';
import List from '../List/List';
import ProductListQueryFetcher from '../ProductListQueryFetcher/ProductListQueryFetcher';
import ProductDetailPage from '../ProductDetail/ProductDetailPage';



const Router = createBrowserRouter({
    routeConfig: makeRouteConfig(
        <Route Component={App}>
            <Route path="list" Component={List} />
            <Route path="productlist">
                <Route render={() => <div>
                    <AddProductForm />
                    <div>
                        <ProductListQueryFetcher />
                    </div>
                </div>} />
            </Route>
            <Route path="product/:prodId"
                Component={ProductDetailPage}
                prepareVariables={({ prodId }: any) => ({ prodId })}
            />
            <Redirect from="*" to="/list" />
        </Route>
    ),

    render: createRender({}),
});

export default Router;
