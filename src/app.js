console.log('App.js is running!');

// Challenge:
// only render subtitle (and p tag) if subtitle exists - logical AND
// render new p tag - if options.length > 0 print "Here are your options", otherwise "No options"

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {(app.options && app.options.length > 0) ? "Here are your options" : "No options"}
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

let counter = 0;
const addOne = () => console.log('addOne');
const minusOne = () => console.log('minusOne');
const reset = () => console.log('reset');

const templateTwo = (
  <div>
    <h1>Count: {counter}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>Reset</button>
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
