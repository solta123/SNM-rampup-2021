/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ProductListQueryFetcherProductQueryVariables = {};
export type ProductListQueryFetcherProductQueryResponse = {
    readonly allProducts: {
        readonly nodes: ReadonlyArray<{
            readonly price: unknown;
            readonly title: string;
            readonly actor: string;
            readonly prodId: number;
        } | null>;
    } | null;
};
export type ProductListQueryFetcherProductQuery = {
    readonly response: ProductListQueryFetcherProductQueryResponse;
    readonly variables: ProductListQueryFetcherProductQueryVariables;
};



/*
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "first",
        "value": 20
      },
      {
        "kind": "Literal",
        "name": "orderBy",
        "value": "PROD_ID_DESC"
      }
    ],
    "concreteType": "ProductsConnection",
    "kind": "LinkedField",
    "name": "allProducts",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Product",
        "kind": "LinkedField",
        "name": "nodes",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "price",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "actor",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "prodId",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "allProducts(first:20,orderBy:\"PROD_ID_DESC\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ProductListQueryFetcherProductQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ProductListQueryFetcherProductQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "b2c3f3b3d6e43dfd57d911e7eec11b93",
    "id": null,
    "metadata": {},
    "name": "ProductListQueryFetcherProductQuery",
    "operationKind": "query",
    "text": "query ProductListQueryFetcherProductQuery {\n  allProducts(orderBy: PROD_ID_DESC, first: 20) {\n    nodes {\n      price\n      title\n      actor\n      prodId\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c115fe0549c689ba9d68fb1f1c9d2662';
export default node;
