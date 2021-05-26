import React from 'react';
import { ListCustomersQueryResponseNode } from '../List/List';

const ListElement = (props: { data: ListCustomersQueryResponseNode }) => {
    return (
        <li id={props.data?.email || 'asd'}>
            <h2>{props.data?.firstname} {props.data?.lastname} ({props.data?.age})</h2>
            <div>Email: {props.data?.email}</div>
            <div>Country: {props.data?.country}</div>
        </li>
    );
};

export default ListElement;
