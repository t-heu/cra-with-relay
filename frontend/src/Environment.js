import {
  Store,
  Network,
  Environment,
  RecordSource,
  //commitLocalUpdate
} from "relay-runtime";
//import RelayQueryResponseCache from "relay-runtime/lib/RelayQueryResponseCache";

// Make the request, and implement the cache
function fetchQuery(operation,
    variables) {
  return fetch('http://localhost:4000', {
    method: 'POST',
    headers: {
        //'Authorization': `${tok}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  })
  .then(response => response.json())
  .then((data) => data)
}

// Create an instance of Relay Environment
const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

/*
// state managment
// Set initial values
commitLocalUpdate(environment, store => {
  const fieldKey = "settings";
  const __typename = "Settings";

  const dataID = `client:${__typename}`;
  const record = store.create(dataID, __typename);

  record.setValue(true, "isDrawerOpen");

  environment.retain({
    dataID,
    variables: {},
    node: { selections: [] }
  });

  store.getRoot().setLinkedRecord(record, fieldKey);
});*/

export default environment;