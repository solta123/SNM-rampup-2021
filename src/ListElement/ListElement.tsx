import React from 'react';
import { ListCustomersQueryResponseNode } from '../List/List';

const ListElement = ({ data }: { data: ListCustomersQueryResponseNode }) => {
    return (
        <li id={data?.email || 'asd'}>
            <h2>{data?.firstname} {data?.lastname} ({data?.age})</h2>
            <div>Email: {data?.email}</div>
            <div>Country: {data?.country}</div>
        </li>
    );
};

export default ListElement;
