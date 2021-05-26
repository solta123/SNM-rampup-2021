import React from 'react';

const Loading = (props: { message: string }) => {
    return <div id={props.message}>{props.message}</div>
};

export default Loading;
