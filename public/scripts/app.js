'use strict';

console.log('App.js is running!');

// Challenge:
// only render subtitle (and p tag) if subtitle exists - logical AND
// render new p tag - if options.length > 0 print "Here are your options", otherwise "No options"

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  app.options && app.options.length > 0 ? "Here are your options" : "No options",
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var counter = 0;
// console would show counter incrementing but <h1> below doesn't change
// This is because React compiles the template resolving expressions (variables & functions)
// and renders it to the DOM
// Updating the variable alone isn't enough - we need to recomple the template + re-render 
var addOne = function addOne() {
  counter++;
  console.log('addOne:' + counter);
  renderCounterApp();
};
var minusOne = function minusOne() {
  counter--;
  console.log('minusOne:' + counter);
  renderCounterApp();
};
var reset = function reset() {
  counter = 0;
  console.log('reset:' + counter);
  renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      counter
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'Reset'
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
