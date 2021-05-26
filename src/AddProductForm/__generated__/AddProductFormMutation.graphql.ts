/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CreateProductInput = {
    clientMutationId?: string | null;
    product: ProductInput;
};
export type ProductInput = {
    prodId?: number | null;
    category: number;
    title: string;
    actor: string;
    price: unknown;
    special?: number | null;
    commonProdId: number;
};
export type AddProductFormMutationVariables = {
    input: CreateProductInput;
};
export type AddProductFormMutationResponse = {
    readonly createProduct: {
        readonly product: {
            readonly actor: string;
            readonly price: unknown;
            readonly title: string;
            readonly prodId: number;
        } | null;
    } | null;
};
export type AddProductFormMutation = {
    readonly response: AddProductFormMutationResponse;
    readonly variables: AddProductFormMutationVariables;
};



/*
mutation AddProductFormMutation(
  $input: CreateProductInput!
) {
  createProduct(input: $input) {
    product {
      actor
      price
      title
      prodId
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateProductPayload",
    "kind": "LinkedField",
    "name": "createProduct",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Product",
        "kind": "LinkedField",
        "name": "product",
        "plural": false,
        "selections": [
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
            "name": "prodId",
            "storageKey": null
          }
        ],
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
    "name": "AddProductFormMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddProductFormMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c0c50dcbfad5dbfc035a02f062a92fdb",
    "id": null,
    "metadata": {},
    "name": "AddProductFormMutation",
    "operationKind": "mutation",
    "text": "mutation AddProductFormMutation(\n  $input: CreateProductInput!\n) {\n  createProduct(input: $input) {\n    product {\n      actor\n      price\n      title\n      prodId\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '586abc62873cf4c07b12f2d2608c10b7';
export default node;
