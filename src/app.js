import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('p', {}, 'Component through npm package');

ReactDOM.render(template, document.getElementById('app'));