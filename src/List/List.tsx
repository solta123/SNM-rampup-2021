import React from 'react';
import ListElement from '../ListElement/ListElement';
import { graphql } from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { ListCustomersQuery, ListCustomersQueryResponse } from './__generated__/ListCustomersQuery.graphql';

export type ListCustomersQueryResponseNode = {
  readonly age: number | null;
  readonly country: string;
  readonly email: string | null;
  readonly firstname: string;
  readonly lastname: string;
} | null;

export const customersQuery = graphql`
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
`;

const List = () => {
  const data: ListCustomersQueryResponse = useLazyLoadQuery<ListCustomersQuery>(customersQuery, {});

  return (
    <ul id="list">
      <h1>List</h1>
      {data.allCustomers?.nodes.map((element: ListCustomersQueryResponseNode) => {
        return <ListElement key={element?.firstname + '_' + element?.lastname} data={element} />;
      })}
    </ul>
  );
};

export default List;
