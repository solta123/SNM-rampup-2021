/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ListCustomersQueryVariables = {};
export type ListCustomersQueryResponse = {
    readonly allCustomers: {
        readonly nodes: ReadonlyArray<{
            readonly age: number | null;
            readonly country: string;
            readonly email: string | null;
            readonly firstname: string;
            readonly lastname: string;
        } | null>;
    } | null;
};
export type ListCustomersQuery = {
    readonly response: ListCustomersQueryResponse;
    readonly variables: ListCustomersQueryVariables;
};



/*
query ListCustomersQuery {
  allCustomers(first: 10) {
    nodes {
      age
      country
      email
      firstname
      lastname
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
        "value": 10
      }
    ],
    "concreteType": "CustomersConnection",
    "kind": "LinkedField",
    "name": "allCustomers",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Customer",
        "kind": "LinkedField",
        "name": "nodes",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "age",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "country",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "firstname",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lastname",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "allCustomers(first:10)"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ListCustomersQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ListCustomersQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "0abf4f56eeb74700456ccd006d07e548",
    "id": null,
    "metadata": {},
    "name": "ListCustomersQuery",
    "operationKind": "query",
    "text": "query ListCustomersQuery {\n  allCustomers(first: 10) {\n    nodes {\n      age\n      country\n      email\n      firstname\n      lastname\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f2c1467ba2c052b940104a00ff3d7b71';
export default node;
