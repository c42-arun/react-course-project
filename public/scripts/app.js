'use strict';

console.log('App.js is running!');

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

var appRoot = document.getElementById('app');

var onRemoveAll = function onRemoveAll() {
  app.options.length = 0;
  render();
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  console.log(e.target);
  console.log(e.target.elements.option.value);

  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(e.target.elements.option.value);
    e.target.elements.option.value = '';

    render();
  }
};

// const numbers = [5, 67, 700];

var render = function render() {
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
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
