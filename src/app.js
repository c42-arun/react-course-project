import React from 'react';
import ReactDOM from 'react-dom';

// const template = React.createElement('p', {}, 'Component through npm package');
const template = <p>This is JSX template from webpack!</p>

ReactDOM.render(template, document.getElementById('app'));