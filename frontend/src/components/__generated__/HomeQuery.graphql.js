/**
 * @flow
 * @relayHash 6adcfbbcf3ebd6d96ccc67e8dd5e6b2f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type HomeQueryVariables = {||};
export type HomeQueryResponse = {|
  +books: ?$ReadOnlyArray<?{|
    +title: ?string,
    +author: ?string,
  |}>
|};
export type HomeQuery = {|
  variables: HomeQueryVariables,
  response: HomeQueryResponse,
|};
*/


/*
query HomeQuery {
  books {
    title
    author
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "books",
    "storageKey": null,
    "args": null,
    "concreteType": "Book",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "author",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "HomeQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "HomeQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "HomeQuery",
    "id": null,
    "text": "query HomeQuery {\n  books {\n    title\n    author\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8bec8e7a69f0d24ab46c4168ae5eb664';

module.exports = node;
