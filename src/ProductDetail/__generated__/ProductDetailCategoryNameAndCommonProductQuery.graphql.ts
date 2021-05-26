/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ProductDetailCategoryNameAndCommonProductQueryVariables = {
    category: number;
    prodId: number;
};
export type ProductDetailCategoryNameAndCommonProductQueryResponse = {
    readonly categoryByCategory: {
        readonly categoryname: string;
    } | null;
    readonly productByProdId: {
        readonly prodId: number;
        readonly title: string;
        readonly price: unknown;
        readonly actor: string;
    } | null;
};
export type ProductDetailCategoryNameAndCommonProductQuery = {
    readonly response: ProductDetailCategoryNameAndCommonProductQueryResponse;
    readonly variables: ProductDetailCategoryNameAndCommonProductQueryVariables;
};



/*
query ProductDetailCategoryNameAndCommonProductQuery(
  $category: Int!
  $prodId: Int!
) {
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "category"
  },
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
        "name": "category",
        "variableName": "category"
      }
    ],
    "concreteType": "Category",
    "kind": "LinkedField",
    "name": "categoryByCategory",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "categoryname",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
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
        "name": "prodId",
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
        "name": "price",
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
    "name": "ProductDetailCategoryNameAndCommonProductQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProductDetailCategoryNameAndCommonProductQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "23a3a1fdfa670da6275f3b7d7a3df129",
    "id": null,
    "metadata": {},
    "name": "ProductDetailCategoryNameAndCommonProductQuery",
    "operationKind": "query",
    "text": "query ProductDetailCategoryNameAndCommonProductQuery(\n  $category: Int!\n  $prodId: Int!\n) {\n  categoryByCategory(category: $category) {\n    categoryname\n  }\n  productByProdId(prodId: $prodId) {\n    prodId\n    title\n    price\n    actor\n  }\n}\n"
  }
};
})();
(node as any).hash = '011d03e7a98addc501dcc2310a829aa2';
export default node;
