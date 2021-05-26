/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ProductDetailPageQueryVariables = {
    prodId: number;
};
export type ProductDetailPageQueryResponse = {
    readonly productByProdId: {
        readonly category: number;
        readonly commonProdId: number;
        readonly nodeId: string;
        readonly price: unknown;
        readonly prodId: number;
        readonly special: number | null;
        readonly title: string;
        readonly actor: string;
    } | null;
};
export type ProductDetailPageQuery = {
    readonly response: ProductDetailPageQueryResponse;
    readonly variables: ProductDetailPageQueryVariables;
};



/*
query ProductDetailPageQuery(
  $prodId: Int!
) {
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "prodId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "prodId",
        "variableName": "prodId"
      }
    ],
    "concreteType": "Product",
    "kind": "LinkedField",
    "name": "productByProdId",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "category",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "commonProdId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "nodeId",
        "storageKey": null
      },
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
        "name": "prodId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "special",
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
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ProductDetailPageQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProductDetailPageQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "bfabc8acd9d5427ee171ce0f1baeb5b9",
    "id": null,
    "metadata": {},
    "name": "ProductDetailPageQuery",
    "operationKind": "query",
    "text": "query ProductDetailPageQuery(\n  $prodId: Int!\n) {\n  productByProdId(prodId: $prodId) {\n    category\n    commonProdId\n    nodeId\n    price\n    prodId\n    special\n    title\n    actor\n  }\n}\n"
  }
};
})();
(node as any).hash = '20d95eb731b2ba7aeef5957832f11a26';
export default node;
