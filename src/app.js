import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';
 
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

const Layout = (props) => {
    return (
        <div>
            <p>header</p>
            {props.markup}
            <p>footer</p>
        </div>
    )
};

const template = (
    <div>
        <h1>Page Title</h1>
        <p>This is my page</p>
    </div>
);

ReactDOM.render(<Layout markup={template}/>, document.getElementById('app'));
