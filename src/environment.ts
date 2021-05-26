import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import fetchGraphQL from './fetchGraphQL';

type RequestParameters = {
  cacheID?: string | null | undefined,
  id: string | null | undefined,
  metadata: object,
  name: string,
  operationKind: string,
  text: string | null | undefined
};

async function fetchRelay(params: RequestParameters, variables: any) {
  if (params?.text) {
    return fetchGraphQL(params.text, variables);
  }
  return null;
}

export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});
