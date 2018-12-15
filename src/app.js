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

const user = {
  name: 'Andrew',
  age: 26,
  location: 'Philadelphia'
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous User'}</h1>
    {(user.age && user.age > 18) && <p>Age: {user.age}</p> }  
    { getLocation(user.location) }
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
